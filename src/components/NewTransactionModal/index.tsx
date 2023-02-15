import { zodResolver } from "@hookform/resolvers/zod";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "../Button";

import { Input } from "../Input";

import {
  Content,
  FormTransactionModal,
  CloseButton,
  Overlay,
  TransactionType,
  TransactionTypeButton,
  ArrowCircleUpIcon,
  ArrowCircleDownIcon,
} from "./styles";

const newTransactionFormSchema = z.object({
  description: z.string().min(1),
  price: z.number().positive(),
  category: z.string().min(1),
  type: z.enum(["income", "outcome"]),
});

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

export function NewTransactionModal() {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      description: "",
      price: 0,
      category: "",
      type: "income",
    },
  });

  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <Dialog.Close asChild aria-label="Close">
          <CloseButton>
            <X size={24} />
          </CloseButton>
        </Dialog.Close>

        <FormTransactionModal
          onSubmit={handleSubmit(handleCreateNewTransaction)}
        >
          <Input
            type="text"
            placeholder="Descrição"
            // required
            {...register("description", {
              required: "Por favor, digite uma descrição.",
            })}
          />

          <Input
            type="number"
            placeholder="Preço"
            // required
            {...register("price", {
              valueAsNumber: true,
              required: "Por favor, digite um valor.",
            })}
          />

          <Input
            type="text"
            placeholder="Categoria"
            // required
            {...register("category", {
              required: "Por favor, digite uma categoria.",
            })}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <TransactionType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionTypeButton value="income" variant="income">
                    <ArrowCircleUpIcon />
                    Entrada
                  </TransactionTypeButton>

                  <TransactionTypeButton value="outcome" variant="outcome">
                    <ArrowCircleDownIcon />
                    Saída
                  </TransactionTypeButton>
                </TransactionType>
              );
            }}
          />

          <Button type="submit" disabled={isSubmitting}>
            Cadastrar
          </Button>
        </FormTransactionModal>
      </Content>
    </Dialog.Portal>
  );
}
