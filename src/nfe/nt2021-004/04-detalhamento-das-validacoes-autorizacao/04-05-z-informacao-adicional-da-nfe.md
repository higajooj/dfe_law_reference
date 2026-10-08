<!-- p.18 -->
# 4.5 Z. Informação Adicional da NF-e

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| Z02-10 | 65 | NFC-e sem preenchimento das Informações Adicionais de Interesse do Fisco (campo:infAdFisco).<br>**Observação 1:** Regra de validação restrita a UF de SC.<br>**Observação 2:** Implementação futura. | Facul. | 949 | Rej | Rejeição: NFC-e sem preenchimento das Informações Adicionais de Interesse do Fisco |
| Z02-20 | 65 | Tamanho das Informações Adicionais de Interesse do Fisco (campo:infAdFisco) não atende ao tamanho mínimo exigido<br>**Observação 1:** Regra de validação restrita a UF de SC, que exige um tamanho mínimo de 251 caracteres.<br>**Observação 2:** Implementação futura. | Facul. | 950 | Rej. | Rejeição: Informações Adicionais de Interesse do Fisco abaixo do tamanho mínimo exigido pela UF. |
| Z13-10 | 55/65 | Se Tipo do ato concessório (campo: tpAto) for igual a 08 ou 10, campo nProc não segue o padrão de regime especial da UF.<br>**Observação 1:** Regra de validação a critério da UF<br>**Observação 2:** Tabela de Padrões de Regime Especial de cada UF publicada na aba “Documentos”, opção “Diversos” do Portal Nacional da NF-e (www.nfe.fazenda.gov.br) | Facul. | 941 | Rej. | Rejeição: Número do Regime especial inválido. |
