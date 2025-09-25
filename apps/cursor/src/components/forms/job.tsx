"use client";

import { createJobListingAction } from "@/actions/create-job-listing";
import { CompanySelect } from "@/components/company/company-select";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAction } from "next-safe-action/hooks";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  company_id: z.string({
    required_error: "Te rugăm să selectezi o companie.",
  }),
  title: z.string().min(2, {
    message: "Titlul trebuie să aibă cel puțin 2 caractere.",
  }),
  location: z.string().min(1, {
    message: "Locația este obligatorie.",
  }),
  description: z
    .string()
    .min(10, {
      message: "Descrierea trebuie să aibă cel puțin 10 caractere.",
    })
    .max(500, {
      message: "Descrierea trebuie să aibă mai puțin de 500 de caractere.",
    }),
  link: z.string().url({
    message: "Te rugăm să introduci un URL valid al anunțului.",
  }),
  // Keep underlying values consistent with server action schema
  workplace: z.enum(["On site", "Remote", "Hybrid"]),
  experience: z.string().optional(),
  // Plan removed: all jobs are created as free "standard" by the server
});

export function JobForm() {
  const { execute, isExecuting } = useAction(createJobListingAction);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      company_id: "",
      title: "",
      location: "",
      description: "",
      link: "",
  workplace: "On site",
      experience: "",
      // Plan removed from client form; server defaults to "standard"
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    execute({
      company_id: values.company_id,
      title: values.title,
      location: values.location,
      description: values.description,
      link: values.link,
      workplace: values.workplace,
      experience: values.experience ?? null,
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-6 pb-6">
          <FormField
            control={form.control}
            name="company_id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Companie</FormLabel>
                <FormControl>
                  <CompanySelect
                    value={field.value}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Titlul anunțului</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Senior Software Engineer"
                    {...field}
                    className="placeholder:text-[#878787] border-border"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Locație</FormLabel>
                <FormControl>
                  <Input
                    placeholder="București"
                    {...field}
                    className="placeholder:text-[#878787] border-border"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="workplace"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tipul locului de muncă</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="border-border">
                        <SelectValue placeholder="Selectează tipul" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="On site">La birou</SelectItem>
                      <SelectItem value="Remote">Remote</SelectItem>
                      <SelectItem value="Hybrid">Hibrid</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="experience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ani de experiență</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="4"
                      {...field}
                      className="placeholder:text-[#878787] border-border"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Descrierea anunțului</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Scrie o descriere a rolului..."
                    {...field}
                    className="placeholder:text-[#878787] border-border min-h-[100px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="link"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Link către pagina jobului</FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://compania-ta.com/cariere/anunt"
                    {...field}
                    type="url"
                    className="placeholder:text-[#878787] border-border"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/** Payment/plan options removed — job postings are free */}
        </div>

        <Button type="submit" className="w-full" disabled={isExecuting}>
          {isExecuting ? "Se salvează..." : "Publică jobul"}
        </Button>
      </form>
    </Form>
  );
}
