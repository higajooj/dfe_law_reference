<!-- p.24 -->
# 4.3 Conceito e objetivo do hash do QR Code

A fim de garantir maior segurança ao processo da NFC-e no que diz respeito à impressão do DANFE NFC-e e à geração de QR Code, foi incluído o parâmetro “hash do QR Code”.

Este hash é gerado sobre um conjunto padrão de informações essenciais da NFC-e e também sobre **CSC – Código de Segurança do Contribuinte** válido para a empresa na Unidade Federada.

O CSC corresponde a um código de segurança alfanumérico (16 a 36 bytes) de conhecimento apenas da Secretaria da Fazenda da Unidade Federada do emitente e do próprio contribuinte. Importante destacar que até versão anterior deste manual (versão 3.2) o código de segurança CSC era chamado de “Token”, todavia optou-se pela adequação do nome para minimizar eventuais confusões decorrentes da palavra “token”.

Desta forma é possível garantir a autoria do DANFE NFC-e e do respectivo QR Code pois somente o Fisco e o contribuinte emissor conhecem o valor válido do CSC para aquela empresa na UF.

Para a geração do hash do QR Code sobre os parâmetros da consulta NFC-e via QR Code, deve ser utilizado o algoritmo SHA-1 e o resultado obtido deve ser convertido para hexadecimal, correspondendo a 40 bytes. Informações adicionais sobre esse algoritmo podem ser encontradas no endereço eletrônico http://pt.wikipedia.org/wiki/SHA1.

Para verificar se a conversões realizadas do HEXA do digestvalue e SHA-1 do hash do QR Code estão corretas ou não, foi disponibilizada uma página de validação da URL no Portal Nacional NFC-e - Desenvolvedor (http://nfce.encat.org/desenvolvedor/) na opção "Validador de SHA1 e HEXA".
