# 3.4 Descrição do Processo de Distribuição de DF-e de Interesse

Este serviço pode ser consumido por atores relacionados como autorizados ao XML, contratantes e por proprietários de veículos utilizados em MDF-e quando o RNTRC do proprietário for diferente do RNTRC do emitente do manifesto, Pessoa Física ou Jurídica, que possua um certificado digital de PF com seu CPF ou PJ com seu CNPJ.

O Ambiente Nacional gera um número sequencial único (NSU) para cada interessado nos documentos fiscais. Os documentos recuperados deverão conter uma sequência de numeração sem intervalos em sua base de dados.

**a) Geração do pedido de distribuição**

O XML do pedido de distribuição suporta dois tipos de consultas que são definidas de acordo com a tag informada no XML. As tags são `distNSU` e `consNSU`.

**a.1) distNSU – Distribuição de Conjunto de DF-e a Partir do NSU Informado**

A aplicação cliente do WS deve informar o último número sequencial único (`ultNSU`) que possui.

Caso o NSU informado seja menor que o primeiro NSU disponível para distribuição, a aplicação do Ambiente Nacional deverá fornecer os documentos a partir do primeiro disponível para consulta.

**a.2) consNSU – Distribuição de DF-e vinculado ao NSU Informado**

Este processo de consulta DF-e a partir de um NSU permite que o interessado nos documentos fiscais consulte de maneira pontual um NSU que foi identificado como faltante em sua base de dados.

A aplicação cliente do WS deve informar o número sequencial único (`NSU`) identificado como faltante em sua base de dados.

**b) CNPJ ou CPF do interessado no DF-e**

Informar o CPF da pessoa ou CNPJ da empresa para recuperação de DF-e de seu interesse. Este campo possibilita que uma empresa consiga recuperar os DF-e de qualquer um de seus estabelecimentos utilizando somente um certificado digital PJ.

**c) Envio das informações**

<!-- p.15 -->

O pedido de distribuição será enviado por Web Service, sendo necessário o uso de um certificado digital de PJ ou PF válido. O WS do Ambiente Nacional é acionado pela aplicação cliente do interessado que deve enviar uma mensagem que atenda os padrões estabelecidos neste manual.
