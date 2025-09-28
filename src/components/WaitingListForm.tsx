import React, { useState } from "react";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import DatePicker from "@/components/ui/DatePicker";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import { getConfigFromEnv } from "@/config/lp-config";

interface WaitingListFormProps {
  isOpen: boolean;
  onClose: () => void;
  targetAudience?: "demand" | "supply";
}

interface FormData {
  lastName: string;
  firstName: string;
  gender: string;
  birthDate: string;
  company?: string;
  email: string;
  phone?: string;
}

const WaitingListForm: React.FC<WaitingListFormProps> = ({
  isOpen,
  onClose,
  targetAudience = "demand",
}) => {
  const config = getConfigFromEnv();
  const [formData, setFormData] = useState<FormData>({
    lastName: "",
    firstName: "",
    gender: "",
    birthDate: "",
    company: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.lastName.trim()) {
      newErrors.lastName = "姓を入力してください";
    }

    if (!formData.firstName.trim()) {
      newErrors.firstName = "名を入力してください";
    }

    if (!formData.gender) {
      newErrors.gender = "性別を選択してください";
    }

    if (!formData.birthDate) {
      newErrors.birthDate = "生年月日を入力してください";
    }

    // 供給側の場合は会社名を必須にする
    if (targetAudience === "supply" && !formData.company?.trim()) {
      newErrors.company = "会社名を入力してください";
    }

    if (!formData.email.trim()) {
      newErrors.email = "メールアドレスを入力してください";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "有効なメールアドレスを入力してください";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // ローカルストレージに保存
      const existingData = JSON.parse(
        localStorage.getItem("waitingList") || "[]"
      );
      const newEntry = {
        ...formData,
        id: Date.now().toString(),
        timestamp: new Date().toISOString(),
      };

      localStorage.setItem(
        "waitingList",
        JSON.stringify([...existingData, newEntry])
      );

      // メール送信（実際の実装では、APIエンドポイントを呼び出し）
      await fetch("/api/waiting-list", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          targetAudience,
        }),
      });

      setIsSuccess(true);
      setFormData({
        lastName: "",
        firstName: "",
        gender: "",
        birthDate: "",
        company: "",
        email: "",
        phone: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      // エラーハンドリング（実際の実装では、ユーザーにエラーメッセージを表示）
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // エラーをクリア
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // エラーをクリア
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleClose = () => {
    setFormData({
      lastName: "",
      firstName: "",
      gender: "",
      birthDate: "",
      company: "",
      email: "",
      phone: "",
    });
    setErrors({});
    setIsSuccess(false);
    onClose();
  };

  if (isSuccess) {
    return (
      <Modal isOpen={isOpen} onClose={handleClose} title="登録完了">
        <div className="text-center space-y-6">
          <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto">
            <svg
              className="w-8 h-8 text-secondary-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              登録が完了しました！
            </h3>
            <p className="text-gray-600">
              {config.waitingListConfig.successMessage}
            </p>
          </div>
          <Button onClick={handleClose} className="w-full">
            閉じる
          </Button>
        </div>
      </Modal>
    );
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={config.waitingListConfig.title}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {config.waitingListConfig.description && (
          <p className="text-gray-600 text-center">
            {config.waitingListConfig.description}
          </p>
        )}

        <div className="grid grid-cols-2 gap-4">
          <Input
            label="姓"
            name="lastName"
            type="text"
            placeholder="山田"
            required
            value={formData.lastName}
            onChange={handleInputChange}
            error={errors.lastName}
          />
          <Input
            label="名"
            name="firstName"
            type="text"
            placeholder="太郎"
            required
            value={formData.firstName}
            onChange={handleInputChange}
            error={errors.firstName}
          />
        </div>

        <Select
          label="性別"
          name="gender"
          placeholder="性別を選択してください"
          required
          value={formData.gender}
          onChange={handleSelectChange}
          error={errors.gender}
          options={[
            { value: "male", label: "男性" },
            { value: "female", label: "女性" },
            { value: "other", label: "その他" },
          ]}
        />

        <DatePicker
          label="生年月日"
          name="birthDate"
          required
          value={formData.birthDate}
          onChange={handleInputChange}
          error={errors.birthDate}
          max={new Date().toISOString().split("T")[0]} // 今日より前の日付のみ
          min={
            new Date(new Date().getFullYear() - 100, 0, 1)
              .toISOString()
              .split("T")[0]
          } // 100年前まで
        />

        <Input
          label={targetAudience === "supply" ? "会社名" : "会社名（任意）"}
          name="company"
          type="text"
          placeholder="株式会社サンプル"
          required={targetAudience === "supply"}
          value={formData.company || ""}
          onChange={handleInputChange}
          error={errors.company}
        />

        <Input
          label="メールアドレス"
          name="email"
          type="email"
          placeholder="example@company.com"
          required
          value={formData.email}
          onChange={handleInputChange}
          error={errors.email}
        />

        <Input
          label="電話番号（任意）"
          name="phone"
          type="tel"
          placeholder="03-1234-5678"
          required={false}
          value={formData.phone || ""}
          onChange={handleInputChange}
          error={errors.phone}
        />

        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? "送信中..." : config.waitingListConfig.buttonText}
        </Button>
      </form>
    </Modal>
  );
};

export default WaitingListForm;
