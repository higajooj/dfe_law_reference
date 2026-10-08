<!-- p.6 -->
# 01. Resumo

Esta Nota Técnica trata de diferentes assuntos, conforme segue:

**A. Consulta Situação da Nota Fiscal**  
Limitado o prazo da consulta ao Web Service de Consulta Situação para 180 dias da data de emissão da Nota Fiscal Eletrônica. Alterada também a resposta desta consulta, retornando unicamente os eventos de Cancelamento, Carta de Correção e EPEC.

**B. Enquadramento Legal: IPI / ICMS**  
Definição dos valores possíveis para o Código de Enquadramento Legal no IPI, incluindo o código de isenção de IPI relacionado com as Olimpíadas Rio 2016. Definido também novo Motivo de Desoneração do ICMS relacionado com as Olimpíadas Rio 2016.

**C. Regras de Validação Diversas**  
A partir desta NT será verificado se o NCM informado no item da Nota Fiscal existe na tabela de NCM publicada pelo Ministério do Desenvolvimento (MDIC). Foram alteradas também diversas regras de validação, melhorando a qualidade da informação recebida, afetando, principalmente, os sistemas das SEFAZ Autorizadoras.

**D. NFC-e: Ambiente de Homologação**  
Alterados os controles para a autorização de uso de NFC-e enviada para o ambiente de homologação (ambiente de testes para as empresas).

**E. NFC-e: Prazo de Tolerância no envio para a SEFAZ**  
Mantida a tolerância de 5 minutos no atraso no envio da NFC-e para a SEFAZ, devido ao sincronismo de horário do servidor da empresa e do servidor da SEFAZ. Eliminada a tolerância anterior de 10 minutos. Para o Evento de Cancelamento, foi incluída a mesma tolerância de 5 minutos de atraso no envio, devido ao sincronismo de servidores citada anteriormente.

**F. NFC-e: Grupos de Tributação vinculados com CFOP**  
Incluídas regras de validação relacionadas com os grupos de tributação do ICMS e CFOP possíveis de serem utilizados nas operações de venda para consumidor final, através da NFC-e.

**G. NFC-e: Utilização na operação de venda de combustível**  
Viabilizada a utilização da NFC-e para representar a operação de venda de combustível para consumidor final, efetuada por Posto Revendedor de Combustíveis.

**H. NFC-e: Formas de Pagamento**  
Alterado o grupo de informações sobre o pagamento da NFC-e por cartão de crédito / débito, incluindo a informação do tipo de integração do processo de pagamento com o sistema interno da empresa. Foram estabelecidas novas regras de validação nesta área.

**I. NFC-e: Campo de QR-Code no leiaute da NFC-e**  
O Projeto da NFC-e compreende a autorização da NFC-e pelas empresas e a disponibilização para o consumidor final de uma Consulta da NFC-e via QR-Code. Incluído no leiaute um campo texto que representa o QR-Code. Incluídas novas regras de validação, garantindo a qualidade desta informação.

O prazo previsto para a implementação desses ajustes é:

- **Ambiente de Homologação** (ambiente de teste das empresas): 01/09/16;
- **Ambiente de Produção**: 10/09/16.
