# 3.3. Preenchimento da URL do QR Code

| Versão | Orientações de Preenchimento da URL do QR Code (id ZX02: qrCode) |
|---|---|
| **QRCode** |  |
| 100 | Informar a URL da “Consulta da NFC-e via QR-Code” no site da SEFAZ, compreendendo:<br>• Endereço do site da UF, incluindo o protocolo de comunicação (“http://” ou “https://”);<br>• Caractere separador “?”;<br>• Parâmetros do QR-Code, concatenados usando o “&” como separador. |
| 2 | Informar a URL da “Consulta da NFC-e via QR-Code”, na versão 2, conforme os seguintes modelos:<br>• Para a NFC-e emitida “on-line”: `https://endereco-consulta-QRCode?p=<chave_acesso>\|<versao_qrcode>\|<tipo_ambiente>\|<identificador_csc>\|<codigo_hash>` Ou `http://endereco-consulta-QRCode?p=<chave_acesso>\|<versao_qrcode>\|<tipo_ambiente>\|<identificador_csc>\|<codigo_hash>`<br>• Para a NFC-e emitida em contingência “off-line”: `http://endereco-consulta-QRCode?p=<chave_acesso>\|<versao_qrcode>\|<tipo_ambiente>\|<dia_data_emissao>\|<valor_total_nfce>\|<digVal>\|<identificador_csc>\|<codigo_hash>` Ou `https://endereco-consulta-QRCode?p=<chave_acesso>\|<versao_qrcode>\|<tipo_ambiente>\|<dia_data_emissao>\|<valor_total_nfce>\|<digVal>\|<identificador_csc>\|<codigo_hash>` |

<!-- REVISAR p.70: a fonte quebra a URL de exemplo com espaços inseridos pela diagramação; os espaços foram removidos no exemplo abaixo -->

Nota 1: Vide “Manual de Padrões Técnicos do DANFE NFC-e e QR-Code” que documenta os endereços dos sites das UF, os parâmetros do QR-Code e a fórmula de montagem e/ou cálculo dos parâmetros.

Nota 2: Respeitar o uso de caracteres maiúsculos / minúsculos, conforme consta no referido Manual.

Nota 3: O caractere “&” é um caractere reservado do XML, portanto não pode aparecer no conteúdo da tag. Para viabilizar a informação do QR-Code, o conteúdo deste campo deve ser informado como: `<![CDATA[texto]]>`

Exemplo: `<![CDATA[https://www.sefaz.rs.gov.br/NFCE/NFCECOM.aspx?chNFe=43150108287693000157651010000000971000001251&nVersao=100&tpAmb=2&cDest=99999999000191&dhEmi=323031352d30312d32305431373a30303a34392d30323a3030&vNF=1.00&vICMS=0.00&digVal=2f4a703477714e6d6e4e646d31776b64743936655a486b65354f513d&cIdToken=000001&cHashQRCode=ecc4f0e7e612456f2e3521768bd572b6f0eae240]]>`

Nota 1: Vide “Manual de Padrões Técnicos do DANFE NFC-e e QR-Code” que documenta os endereços de consulta de QR Code por UF, os parâmetros do QR-Code e a fórmula de montagem e/ou cálculo dos parâmetros.

Nota 2: Respeitar o uso de caracteres maiúsculos / minúsculos, conforme consta no referido Manual.

Nota 3: A forma de emissão da NFC-e está codificado no campo “tpEmis” do XML, e deve ser usado na validação dos diferentes modelos de QR-Code.

Nota4: Nesta nova versão do layout do qrCode não existe a necessidade de informar o conteúdo da tag qrCode dentro de uma seção CDATA.
