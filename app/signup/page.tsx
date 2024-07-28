"use client";
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import React from 'react';
import { Button } from '@/components/ui/button';
import { useSignupInputForm, signupSchema } from '@/helper/validationSchema';
import { z } from 'zod';

function onSubmit(data: z.infer<typeof signupSchema>) {
  console.log(data);
}


const page = () => {
  const from = useSignupInputForm();
	return (
		<div className="flex justify-center mt-[120px]">
			<Card className="w-[648px] h-[476px] flex flex-col items-center justify-center">
				<CardTitle className="w-[528px] text-5xl mb-8 text-center mx-[60px] mt-[60px]">
					Welcome to Workflo!
				</CardTitle>
				<CardContent className="w-[528px] mx-[60px]">
					<Form {...from}>
						<form
              onSubmit={from.handleSubmit(onSubmit)}
						>
							<FormField
								control={from.control}
								name="fullName"
								render={({ field }) => (
									<FormItem className='mb-6'>
										<FormControl>
											<Input
                        type='text'
												placeholder="Full Name"
												{...field}
											/>
										</FormControl>
                    <FormMessage />
									</FormItem>
								)}
							/>
              <FormField
								control={from.control}
								name="email"
								render={({ field }) => (
									<FormItem className='mb-6'>
										<FormControl>
											<Input
												placeholder="Your Email"
												{...field}
											/>
										</FormControl>
                    <FormMessage />
									</FormItem>
								)}
							/>
              <FormField
								control={from.control}
								name="password"
								render={({ field }) => (
									<FormItem className='mb-[22px]'>
										<FormControl>
											<Input
												placeholder="Password"
												{...field}
											/>
										</FormControl>
                    <FormMessage />
									</FormItem>
								)}
							/>
							<Button className='w-full' type="submit">Sign Up</Button>
						</form>
					</Form>
				</CardContent>
				<CardFooter>
					<p>
						Already have an account?{' '}
						<Link className="font-bold underline" href="/login">
							Login.
						</Link>
					</p>
				</CardFooter>
			</Card>
		</div>
	);
};

export default page;
