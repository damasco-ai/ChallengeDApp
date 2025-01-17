/* eslint-disable @typescript-eslint/no-explicit-any */
type Validator<T> = (value: any) => T;

export const str: Validator<string> = (value) => {
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(`Expected a string but got: ${value}`);
  }
  return value;
};

export const url: Validator<string> = (value) => {
  try {
    new URL(value);
    return value;
  } catch {
    throw new Error(`Expected a valid URL but got: ${value}`);
  }
};

export const choices =
  <T extends string>(options: T[]): Validator<T> =>
  (value) => {
    if (!options.includes(value)) {
      throw new Error(
        `Expected one of ${options.join(", ")} but got: ${value}`
      );
    }
    return value;
  };

export const defaultValue =
  <T>(validator: Validator<T>, defaultVal: T): Validator<T> =>
  (value) => {
    return value == null || value === "" ? defaultVal : validator(value);
  };

export const cleanEnv = (validators: { [key: string]: Validator<any> }) => {
  const env: { [key: string]: any } = {};

  Object.entries(validators).forEach(([key, validator]) => {
    const value = process.env[key];
    try {
      env[key] = validator(value);
    } catch (error) {
      console.error(
        `Environment variable ${key} is invalid:`,
        (error as any).message
      );
      throw error;
    }
  });

  return env;
};
