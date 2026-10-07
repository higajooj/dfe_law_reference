<!-- p.4 -->
# 2.2. Alteração de Campos

## 2.2.1. Inclusão dos campos

<!-- p.4 -->
Novos campos foram adicionados ao "Grupo YA. Informações de Pagamento”:

- Os campos CNPJPag e UFPag são de preenchimento facultativo pelo emitente que deseja informar o CNPJ e UF do estabelecimento onde o pagamento foi processado/transacionado/recebido nos casos em que a emissão do documento fiscal ocorrer em estabelecimento distinto.
- Os campos CNPJReceb e idTermPag são destinados a informar o CNPJ do beneficiário do pagamento e o Identificador do terminal de pagamento para fins de integração do pagamento com a emissão do documento fiscal eletrônico.

Nos “Grupos Tributação do ICMS” que possuem ICMS Desonerado, foi criado o campo “indDeduzDeson” para indicar se o valor do ICMS desonerado (vICMSDeson) deduz do valor do item (vProd).

<!-- p.5 -->
## 2.2.2. Alteração dos Campos

No “Grupo I01. Produtos e Serviços / Declaração de Importação”, ~~o campo atual “CNPJ” passa a ser “CNPJ/CPF”~~ foi criado o campo CPF, permitindo também que pessoa física seja adquirente ou encomendante.

> **Revogado/Descontinuado:** o trecho riscado (“CNPJ” passa a ser “CNPJ/CPF”) não se aplica mais; a alteração do campo CNPJ foi substituída pela criação do campo CPF.

No “Grupo Z. Informações Adicionais da NF-e”, foram adicionadas novas opções para identificar procedimentos, benefícios e regimes concedidos no âmbito do CONFAZ.
