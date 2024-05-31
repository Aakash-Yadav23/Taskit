'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from 'sonner';

interface StepProps {
    formData: FormData;
    setFormData: (formData: FormData) => void;
}

interface FormData {
    profession: string;
    task: string;
    github: string;
}

const steps = [
    { title: 'Profession Details', component: ProfessionStep },
    { title: 'Create a Task', component: TaskStep },
    { title: 'GitHub Profile', component: GithubStep }
];

function ProfessionStep({ formData, setFormData }: StepProps) {
    return (
        <div className="space-y-1">
            <Label htmlFor="profession">Profession</Label>
            <Input
                id="profession"
                type="text"
                required
                value={formData.profession}
                onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
            />
        </div>
    );
}

function TaskStep({ formData, setFormData }: StepProps) {
    return (
        <div className="space-y-1">
            <Label htmlFor="task">Create your first task</Label>
            <Input
                id="task"
                type="text"
                required
                value={formData.task}
                onChange={(e) => setFormData({ ...formData, task: e.target.value })}
            />
        </div>
    );
}

function GithubStep({ formData, setFormData }: StepProps) {
    return (
        <div className="space-y-1">
            <Label htmlFor="github">GitHub Profile</Label>
            <Input
                id="github"
                // required
                type="url"
                value={formData.github}
                onChange={(e) => setFormData({ ...formData, github: e.target.value })}
            />
        </div>
    );
}

const Onboarding: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState<FormData>({
        profession: '',
        task: '',
        github: '',
    });
    const router = useRouter();

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            if (currentStep === 0 && formData.profession === '') {
                toast.error("Profession Can't be Empty!")
                return
            }
            if (currentStep === 1 && formData.task === '') {
                toast.error("Task Can't be Empty!")
                return
            }
            setCurrentStep(currentStep + 1);
        } else {
            handleSubmit();
        }
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleSubmit = async () => {
        const response = await fetch('/api/onboarding', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        router.push('/dashboard'); // Redirect to dashboard

        router.push('/dashboard'); // Redirect to dashboard

        if (response.ok) {
            router.push('/dashboard'); // Redirect to dashboard
        }
    };

    const StepComponent = steps[currentStep].component;

    return (
        <Card className="w-full max-w-[600px] h-fit m-auto my-10 ">

            <CardHeader>
                <CardTitle>{steps[currentStep].title}</CardTitle>
                <div className="mt-2 flex justify-between">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`w-1/3 h-1 ${index <= currentStep ? 'bg-blue-600' : 'bg-gray-300'}`}
                        />
                    ))}
                </div>
            </CardHeader>
            <CardContent>
                <form className="space-y-2">
                    <StepComponent formData={formData} setFormData={setFormData} />
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button onClick={handleBack} disabled={currentStep === 0}>Back</Button>
                <Button onClick={handleNext}>{currentStep < steps.length - 1 ? 'Next' : 'Finish'}</Button>
            </CardFooter>
        </Card>
    );
};

export default Onboarding;
