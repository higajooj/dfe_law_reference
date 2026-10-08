# 3.10 Validação das Regras de Negócio

**Validações das Regras de Negócio**

| # | Regra de Validação | Crítica | Msg | Efeito |
|---|---|---|---|---|
| **H01** | Tipo do ambiente do MDF-e difere do ambiente do Web Service | Obrig. | 252 | Rej. |
| **H02** | CNPJ do interessado na distribuição inválido (DV ou zeros) | Obrig. | 489 | Rej. |
| **H03** | CPF do interessado na distribuição inválido (DV ou zeros) | Obrig. | 490 | Rej. |
| **H04** | CNPJ do Certificado Digital utilizado na transmissão não tem o mesmo CNPJ base do CNPJ consultado | Obrig. | 491 | Rej. |
| **H05** | CPF do Certificado Digital utilizado na transmissão diferente do CPF consultado | Obrig. | 492 | Rej. |
| **H06** | Número do NSU informado superior ao maior NSU disponível para consulta | Obrig. | 493 | Rej. |
| **H07** | NSU informado corresponde a documento autorizado há mais de seis meses<br>Retornar o menor NSU aceito para busca para o solicitante<br>[NSUMin: 999999999999999] | Obrig. | 730 | Rej. |
