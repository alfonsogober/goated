export function toAsync<Input>(input: Input): () => Promise<Input> {
  return async (...args) =>
    typeof input === "function" ? input.apply(input, args) : input;
}
