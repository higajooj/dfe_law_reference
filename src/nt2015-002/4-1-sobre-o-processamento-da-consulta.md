<!-- p.32 -->
# 04.1 Sobre o Processamento da Consulta

*Serviço 04: Consulta Situação da Nota Fiscal (item 4.5 do MOC)*

Na resposta do Web Service de Consulta Situação da Nota Fiscal deverão ser retornados unicamente os Eventos de Cancelamento, Carta de Correção e EPEC, reduzindo o tamanho da mensagem de resposta da SEFAZ Autorizadora e reduzindo também o tempo de resposta para esta consulta (\*1).

Reforçada a orientação de uso do Web Service de “Distribuição dos Documentos Fiscais Eletrônicos de Interesse dos Atores da NF-e”, que foi criado exatamente com a finalidade de distribuição de todos os DF-e para Emitentes, Destinatários e demais atores da NF-e, conforme descrito na NT 2014/002, de Agosto de 2014.

Ainda no processamento da requisição das consultas deste Web Service, será limitado o período de consulta para 180 dias da data de emissão da Nota Fiscal (\*1).

Atualmente as requisições do WebService de Consulta da Nota Fiscal representam aproximadamente 30% das requisições recebidas no ambiente da SEFAZ Autorizadora, sendo que algumas empresas mantêm processos em “loop” consultando Chaves de Acesso inexistentes, mesmo para Notas Fiscais autorizadas em anos anteriores.

(\*1) Eventualmente a SEFAZ Autorizadora poderá manter o modelo anterior, conforme seu critério.
