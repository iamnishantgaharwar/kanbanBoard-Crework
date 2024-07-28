"use client"
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useLoginInputForm, loginSchema } from '@/helper/validationSchema';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import Link from 'next/link';
import React from 'react';
import { Button } from '@/components/ui/button';
import { z } from 'zod';

function onSubmit(data: z.infer<typeof loginSchema>) {
  console.log(data);
}

const Login = () => {
	const form = useLoginInputForm();
	return (
		<div className="flex justify-center mt-[120px]">
			<Card className="w-[648px] h-[476px] flex flex-col items-center justify-center">
				<CardTitle className="w-[528px] text-5xl mb-8 text-center mx-[60px] mt-[60px]">
					Welcome to Workflo!
				</CardTitle>
				<CardContent className="w-[528px] mx-[60px]">
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)}>
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem className="mb-6">
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
								control={form.control}
								name="password"
								render={({ field }) => (
									<FormItem className="mb-[22px]">
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
							<Button className="w-full" type="submit">
								Login
							</Button>
						</form>
					</Form>
				</CardContent>
				<CardFooter>
					<p>
						Don’t have an account? Create a{' '}
						<Link className="font-bold underline" href="/signup">
							new account.
						</Link>
					</p>
				</CardFooter>
			</Card>
		</div>
	);
};

export default Login;
