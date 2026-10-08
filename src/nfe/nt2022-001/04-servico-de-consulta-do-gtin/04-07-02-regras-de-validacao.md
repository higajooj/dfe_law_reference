<!-- p.10 -->
# 04.7.2 Regras de Validação

| # | Regra de Validação | Aplic. | Msg | Descrição Erro |
|---|---|---|---|---|
| P10-10 | Normalizar GTIN com 14 posições:<br>- Se GTIN com dígito de verificador inválido | Obrig. | 9491 | Rejeição: GTIN com dígito verificador inválido |
| P10-20 | - Se Prefixo GS1 diferente de 789, 790 (Brasil) | Obrig. | 9492 | Rejeição: GTIN não possui prefixo 789 ou 790 (Brasil) |
| | **Banco de Dados: Cadastro Centralizado de Contribuintes (CCC)** | | | |
| 1P10-10 | Acesso CCC-Cadastro Centralizado de Contribuintes (Chave: CNPJ/CPF do Certificado de Transmissão):<br>- CNPJ/CPF do Certificado de Transmissão não é emitente de NF-e / NFC-e | Obrig. | 9493 | Rejeição: CNPJ/CPF do Certificado de Transmissão não é emitente de NF-e ou NFC-e |
| | **Banco de Dados: Cadastro Centralizado de GTIN (CCG)** | | | |
| 2P10-10 | Acesso CCG-Cadastro Centralizado de GTIN (Chave: GTIN):<br>- GTIN inexistente no CCG | Obrig. | 9494 | Rejeição: GTIN inexistente no Cadastro Centralizado de GTIN (CCG) |
| 2P10-20 | - GTIN existe no CCG, com situação inválida (sitGTIN <> 1)<br>Nota: Não retornar os dados do CCG. | Obrig. | 9495 | Rejeição: GTIN existe no CCG com situação inválida. Solicitar ao dono da marca que entre em contato com a GS1 |
| 2P10-30 | - GTIN existe no CCG, mas Dono da Marca não autorizou a publicação das informações (indNaoAutoriza = 1)<br>Nota: Não retornar os dados do CCG. | Obrig. | 9496 | Rejeição: GTIN existe no CCG, mas dono da marca não autorizou a publicação das informações. Entrar em contato com o dono da marca |
| 2P10-40 | - GTIN existe no CCG com NCM não cadastrado<br>Nota: Retornar os dados do CCG. | Obrig. | 9497 | Rejeição: GTIN existe no CCG com NCM não cadastrado |
| 2P10-50 | - GTIN existe no CCG com NCM inválido ou fora da vigência<br>Nota: Retornar os dados do CCG. | Obrig. | 9498 | Rejeição: GTIN existe no CCG com NCM inválido |
