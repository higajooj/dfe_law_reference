<!-- p.19 -->
# 11. Serviço: Consulta Protocolo (Consulta Situação da NF-e)

| Campo | Modelo | Regra de Validação | Aplic. | Msg | Descrição Erro |
|---|---|---|---|---|---|
| J02e | 55/65 | Chave de Acesso inválida<br>- Série = [0-909, 980-989] e CNPJ zerado ou dígito inválido, ou<br>- Série ~~= [910-969]~~ <> [0-909, 980-989] e CPF zerado ou dígito inválido (NT 2018.001)<br>**Exceção:** Não se aplica para NFF (tpEmis = 3-NFF) (NT 2021.002)<br>**Observação:** Implementação em todos os ambientes autorizadores de NF-e / NFC-e. | Obrig. | 617 | Rejeição: Chave de Acesso inválida (CNPJ/CPF zerado ou dígito inválido) |

> **Revogado/Descontinuado:** a expressão “= [910-969]” está riscada na NT original.
