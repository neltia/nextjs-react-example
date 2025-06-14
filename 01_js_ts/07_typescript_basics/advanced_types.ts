// 유틸리티 타입 및 조건부 타입 사용
type Nullable<T> = T | null;
interface ApiResponse<T> {
  data: T;
  error?: string;
}

type UserResponse = ApiResponse<{ id: number; name: string }>;
