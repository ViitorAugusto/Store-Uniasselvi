
import { env } from "../env";

export function api (path: string, init?: RequestInit) {
  const baseUrl = env.NEXT_PUBLIC_API_BASE_URL;
  const apiPrefix = "/api"; 
  const url = new URL(apiPrefix.concat(path), baseUrl); // o baseUrl não aceita a concatenação de strings diretamente, por isso foi necessário criar um novo objeto URL

  return fetch(url, init);
}

