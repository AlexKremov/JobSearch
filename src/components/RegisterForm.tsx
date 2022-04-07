import * as React from "react";
import { useForm } from "react-hook-form";
import "./styles.css";
import styled from "styled-components";
import InputMask from "react-input-mask";

const Form = styled.form`
  max-width: 500px;
  margin: 0 auto;
`;

const Field = styled.fieldset`
  background-color: #dfdfdf;
  display: flex;
  border: none;
`;

const Label = styled.form`
  line-height: 2;
  text-align: left;
  display: block;
  margin-bottom: 10px;
  margin-top: 10px;
  color: #797979;
  font-size: 14px;
  font-weight: 200;
`;

const LabelRadio = styled.form`
  line-height: 0;
  text-align: center;
  display: block;
  margin-bottom: 10px;
  margin-top: 10px;
  color: #797979;
  font-size: 14px;
  font-weight: 200;
`;

const InputRadio = styled.input`
  height: 15px;
`;

const Input = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border: 1px solid white;
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 14px;
  background-color: #dfdfdf;
`;

interface IFormInput {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  phone: string;
  gender: string;
}

export default function Register() {
  const res: IFormInput[] = [];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    alert(JSON.stringify(data));
    res.push(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h2>Registration</h2>
      <Label>First Name</Label>
      <Input
        {...register("firstName", {
          required: true,
          maxLength: 20,
          pattern: /^[A-Za-z]+$/i,
        })}
      />
      {errors?.firstName?.type === "required" && <p>This field is required</p>}
      {errors?.firstName?.type === "maxLength" && (
        <p>First name cannot exceed 20 characters</p>
      )}
      {errors?.firstName?.type === "pattern" && (
        <p>Alphabetical characters only</p>
      )}
      <Label>Laste Name</Label>
      <Input
        {...register("lastName", {
          required: true,
          maxLength: 20,
          pattern: /^[A-Za-z]+$/i,
        })}
      />
      {errors?.lastName?.type === "pattern" && (
        <p>Alphabetical characters only</p>
      )}
      <Label>Age</Label>
      <Input {...register("age", { min: 18, max: 99, required: true })} />
      {errors.age && (
        <p>You Must be older then 18 and younger then 99 years old</p>
      )}
      <Label>Email</Label>
      <Input
        type="email"
        placeholder="email@example.com"
        {...register("email", { required: true })}
      />
      <Field >
        <legend>Choose your gender:</legend>
        <LabelRadio>Male</LabelRadio>
        <InputRadio type="radio" value="male" checked {...register("gender")} />
        <LabelRadio>Female</LabelRadio>
        <InputRadio type="radio" value="female" {...register("gender")} />
      </Field>

      <Label>Phone</Label>

      <InputMask
        mask="+(999)-999-99999"
        className={"tel"}
        {...register("phone", { required: true })}
      />

      <button type="submit">register</button>
    </Form>
  );
}
