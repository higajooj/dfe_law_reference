# 4.2 Geração da imagem do QR Code para NFC-e

A imagem do QR Code deverá ser impressa no DANFE NFC-e com os padrões residentes das impressoras de não impacto (térmica, laser ou deskjet), conforme mostrado no item 3.2, tendo largura e altura mínimas de 25 mm x 25 mm. A largura e altura mínimas foram definidas conforme testes realizados, nos quais o leitor de QR Code conseguiu ler a imagem.

A imagem do QR Code deverá conter uma URL composta com as seguintes informações:

| Parte | Descrição |
|---|---|
| **1ª parte:** | Endereço do site da Secretaria da Fazenda de localização do emitente da NFC-e. Exemplo: http://www.sefazexemplo.gov.br/nfce/qrcode?p= |
| **2ª parte:** | Parâmetros constantes da tabela 2 para emissão online (seção 4.2.1) e da tabela 3 para emissão em contingência off-line (seção 4.2.2), utilizando query string. |

*Tabela 1: Formação da URL do QR Code*

<!-- p.22 -->

Os endereços de consulta a serem utilizados no QR Code para as Unidades Federadas participantes do Projeto NFC-e em ambiente de produção e ambiente de homologação estão disponíveis no Portal Nacional da NFC-e (http://nfce.encat.org/ - Desenvolvedor URL por UF utilizada QR code).

A critério da Unidade Federada poderá ser utilizado o mesmo endereço para consulta no ambiente de produção e ambiente de homologação. Neste caso, a distinção entre os ambientes de consulta será feita diretamente pela aplicação da UF, a partir do conteúdo do parâmetro de identificação do ambiente, constante do QR Code.

O QR Code deverá ser impresso com os padrões residentes das impressoras de não impacto (térmica, laser ou deskjet).

A URL do QR code deverá ser composta de duas maneiras diferentes: uma para NFC-e emitidas de forma online (sem contingência), e outra para as NFC-e emitidas na contingência off-line.
