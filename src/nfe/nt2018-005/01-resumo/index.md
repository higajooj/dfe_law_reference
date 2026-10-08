<!-- p.6 -->
# 1. Resumo

Esta Nota Técnica divulga as alterações de leiaute da NF-e e da NFC-e, as respectivas regras de validação dos campos criados ou alterados e as alterações no leiaute do DANFE.

## 1.1 Controle das Empresas de Software

Alterado o leiaute da NF-e/NFC-e criando o grupo de campos para identificação do responsável técnico pelo sistema utilizado na emissão do documento fiscal eletrônico. Considera-se responsável técnico a empresa desenvolvedora ou a empresa responsável tecnicamente pelo sistema de emissão de NF-e/NFC-e utilizado pelo contribuinte emitente.

## 1.2 Mensagem de Interesse da SEFAZ

Alterado o grupo de informações do Protocolo de Resposta da SEFAZ, incluindo informações de interesse da SEFAZ. As mensagens serão tabeladas, mantendo o padrão normal do sistema com código e descrição da mensagem. Este novo grupo de informações é opcional, mas provavelmente será adotado por algumas UF no envio de mensagem relativa a uma determinada operação. Conforme definição futura, a mensagem poderá ser de interesse do Emitente, ou do Emitente e do Comprador (por exemplo, no caso da venda para consumidor final).

## 1.3 Protocolo de Autorização na Rejeição por Duplicidade

Atendendo a uma demanda das empresas, será alterado o grupo de informações do Protocolo de Resposta da SEFAZ, no caso da rejeição por duplicidade do documento fiscal eletrônico (NF-e / NFC-e). Neste caso, a critério da UF, poderá ser retornado o protocolo de autorização gerado anteriormente para o documento fiscal facilitando o sistema da empresa na obtenção desta informação.

## 1.4 Criação de novos campos para apuração do Complemento/Restituição do ICMS-ST no Grupo de Repasse do ICMS ST

Foram adicionados novos campos, principalmente nesse grupo, de utilização a critério da UF, para possibilitar a apuração do Complemento/Restituição do ICMS-ST ~~de operações com combustíveis~~ que exijam o preenchimento do Grupo de Repasse do ICMS ST.

> **Revogado/Descontinuado:** o trecho “de operações com combustíveis” (item 1.4) está riscado no original.

As Regras de Validação referentes a Complemento/Restituição do ICMS-ST se aplicam quando CST = 60 (“Grupo Tributação do ICMS= 60” e “Grupo de Repasse do ICMS ST”) e CSOSN = 500.

Obs.: o Grupo de Repasse do ICMS ST pode ter um dos tipos de CST: 41=Não Tributado; 60= cobrado anteriormente por substituição tributária. As RV citadas para Complemento/Restituição do ICMS-ST aplicam-se a esse grupo apenas quando o campo CST (N12) for igual a “60”.

<!-- p.7 -->

## 1.5 Implementação futura para o grupo de campos de identificação do responsável técnico e geração do hashCSRT. Ajuste nas regras de validação N12-81 e N12a-50. Correção do exemplo de geração do hashCSRT. Alterações relativas ao campo N26a (tag: pST) e N26b (tag: vICMSSubstituto)

As regras de validação ZD07-10, 7ZD02-10, 7ZD08-10, 7ZD08-20 e 7ZD09-10, referentes as informações do CSRT e Hash CSRT ficam definidas como de implementação futura, para todas as UFs, conforme data a ser oportunamente divulgada.

As regras de validação ZD01-10 e ZD02-10 (identificação do responsável técnico), ficarão para implementação futura, exceto para as UF: AM, MS, PE, PR, SC e TO, nas quais estas regras já estão em vigor em ambiente de teste na data da publicação da versão 1.30 desta NT, e entrarão em vigor em ambiente de produção no dia 03 de junho de 2019.

Ajuste para não aplicação das regras de validação N12-81 e N12a-50 ao Modelo 65.

Correção do exemplo de geração do hashCSRT.

O campo N26a foi alterado para ter ocorrência “0-1” no “Grupo de Repasse do ICMS ST”.

O campo N26b foi alterado para ter ocorrência “0-1” nos Grupos: “Grupo Tributação do ICMS= 60”, “Grupo de Repasse do ICMS ST” e “Grupo CRT=1 (CSON 500)”.
