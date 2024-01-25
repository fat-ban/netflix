import { z } from "zod";

export type TsignUpSchema = z.infer<typeof signUpSchema>;

export const signUpSchema = z.object({

    email:z.string().email({message: "الرجاء ادخل ايميل صحيح"}),
    name:z.string().min(5,{message: "اسم المستخدم يجب ان يحتوي على الأقل 5 حروف"}),
     password:z.string().min(8,{message: "كلمة المرور يجب ان تحتوي على الاقل 8 حروف"}),
    rememberMe: z.literal(true,{invalid_type_error: "do you remember?"})
  
  
  })