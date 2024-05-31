'use client'

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { useState } from "react";

export function Auth() {
  const [otpSent, setOtpSent] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic
    setOtpSent(true); // Assume OTP sent successfully
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic
  };

  return (
    <Tabs defaultValue="login" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="register">Register</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Login with your email and password</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <form onSubmit={handleLogin}>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>
              <CardFooter className="mt-5 w-full p-0">
                <Button type="submit" className="w-full ">Login</Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="register">
        <Card>
          <CardHeader>
            <CardTitle>Register</CardTitle>
            <CardDescription>Register with your name, email, and password</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <form onSubmit={handleRegister}>
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" type="text" required />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>
              {otpSent && (
                <div className="space-y-1">
                  <Label htmlFor="otp">OTP</Label>
                  <InputOTP maxLength={6}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </div>
              )}
              <CardFooter className="mt-5 w-full p-0">
                <Button type="submit" className="w-full ">Register</Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
