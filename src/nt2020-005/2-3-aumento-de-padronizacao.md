<!-- p.8 -->
# 2.3. Aumento de Padronização

Ao longo dos anos foram sendo introduzidos campos no leiaute da NF-e, com diferentes formas de adaptação nas colunas “#” e “ID” das tabelas respectivas. Nesta NT procurou-se reduzir as diferenças entre estas formas de adaptação.

## 2.3.1. Validação Inicial da Mensagem no Web Service

Na NT2016.002 houve uma padronização nos nomes dos parâmetros de entrada e saída dos Web Services e algumas outras definições.

Observado que algumas empresas novas, não incluem o parâmetro de entrada “nfeDadosMsg” na mensagem SOAP ou erram a informação do nameSpace. Nesses casos, a SEFAZ Autorizadora retorna o erro “999”, ou algum outro erro na chamada do Web Service.

Criada uma regra de validação específica para facilitar a identificação do erro pela empresa, com a mensagem “242 - Rejeição: Mensagem SOAP inválida".
