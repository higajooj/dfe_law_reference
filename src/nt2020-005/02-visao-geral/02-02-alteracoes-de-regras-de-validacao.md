<!-- p.7 -->
# 2.2. Alterações de Regras de Validação

## 2.2.1. CEST Inexistente (regra I05c-10)

Impedir a utilização de Código Especificador da Substituição Tributária inexistente.

## 2.2.2. CFOP: Melhoria da Validação em Anulação de Serviço de Transporte (regra I08-90)

Permitir o uso de CFOP de operação interestadual para anulação de serviço de transporte com tomador e prestador estabelecidos na mesma UF.

## 2.2.3. CST incompatível em Operação com Não Contribuinte (regra N12-70)

Inclusão de Exceção para incluir Operação de Aquisição de Energia Elétrica em Ambiente de Contratação Livre.

## 2.2.4. CST incompatível em Operação com Contribuinte Isento de Inscrição Estadual (regra N12-80)

Inclusão de Exceção para incluir Operação de Remessa para Industrialização por Encomenda.

## 2.2.5. Valor do ICMS Interestadual para UF de Destino (regras NA15-10 e NA17-10)

Reativação da regra que verifica o repasse do diferencial de alíquotas.

## 2.2.6. Uso dos Indicadores Relacionados com Valor Total da Nota (regra W16-10)

Uso correto dos campos indicadores (indSomaPISST – R07 e indSomaCOFINSST – T07) sobre se os valores de PIS Substituição Tributária (vPIS – R06) e de Cofins Substituição Tributária (vCOFINS – T06) integram o valor total da Nota.

## 2.2.7. Informações do Responsável Técnico (regras do grupo ZD)

- Dispensada a informação do grupo de informações do Responsável Técnico em caso de NF-e avulsa
- Corrigidas as redações das regras ZD02-10 e ZD07-10

## 2.2.8. Inclusão de Novos Motivos para Impedir o Cancelamento (regras 4P15-30 e 4P15-34)

Não será mais possível cancelar NF-e na qual tenha sido registrado um dos seguintes eventos:

- 790700 – Registro de Averbação para Exportação
- 990100 – Registro de Cessão de Parcela de Fat-e por IMF
<!-- p.8 -->
- 900120 – Transferência de Parcela de Fat-e por IMF
- 900140 – Ativação de monitoramento de parcela de Fat-e informada por ESF
- 900138 – Envio de Parcela de Fat-e para Cobrança Judicial
- 900110 – Recebível em Avaliação

## 2.2.9. Emitente Bloqueado para Operação com a UF de Destino

Uma das alterações introduzida pelo Ajuste SINIEF 33/19, de 13 de dezembro de 2019 é a possibilidade de, a critério de cada unidade federada, a irregularidade fiscal que pode motivar a denegação de uma nota fiscal poder alcançar também a inexistência de irregularidades identificadas pela Administração Tributária da unidade federada do destinatário ou tomador, por meio de cruzamento de informações do seu banco de dados fiscais, relativa às operações e prestações interestaduais que destinem bens e serviços a consumidor final não contribuinte, correspondentes à diferença entre a alíquota interna da unidade federada destinatária e a alíquota interestadual.

A implementação desta funcionalidade fica viabilizada pela regra de validação 1C17-50.

## 2.2.10. Fim da Validação de Inutilização da Numeração nas Emissões em Contingência

A regra 3B08-100, que não permite autorização de NF-e com numeração que tenha sido inutilizada, deixa de ser aplicada nas hipóteses de emissão em contingência 2 (Contingência FS-IA), 4 (Contingência EPEC) ou 5 (Contingência FS-DA).

## 2.2.11. Rejeição por divergência entre CPF e IE do destinatário

Ativação da regra 5E17-10, para validar o par CPF e IE registrado no Cadastro Centralizado de Contribuintes (CCC): para os destinatários contribuintes identificados por CPF verificar o vínculo entre o CPF e a IE do destinatário informada, conforme o cadastro de contribuintes da unidade federada (UF).

## 2.2.12. Autorização Assíncrona de NFC-e

Autorização assíncrona de NFC-e passa a ser permitida somente para lotes com mais de uma nota (regra GAP03a-3).

## 2.2.13. Tag da UF da Placa Opcional

O novo modelo de placa adotado no Brasil não possui a informação da UF de registro, por este motivo esta informação foi tornada opcional no *schema* (campos X19 e X23).
