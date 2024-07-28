import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
export const loginSchema = z.object({
	email: z.string().email({
        message: 'Please enter a valid email address'
    }),
	password: z.string().min(6,{
        message: 'Password must be at least 6 characters long'
    }),
});

export const signupSchema = z.object({
	fullName: z.string().min(3,{
        message: 'Full name must be at least 3 characters long'
    }),
	email: z.string().email({
        message: 'Please enter a valid email address'
    }),
	password: z.string().min(6, {
        message: 'Password must be at least 6 characters long'
    }),
});

export function useLoginInputForm() {
    return useForm<z.infer<typeof signupSchema>>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });
}

export function useSignupInputForm() {
    return useForm<z.infer<typeof signupSchema>>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
        },
    });
}
