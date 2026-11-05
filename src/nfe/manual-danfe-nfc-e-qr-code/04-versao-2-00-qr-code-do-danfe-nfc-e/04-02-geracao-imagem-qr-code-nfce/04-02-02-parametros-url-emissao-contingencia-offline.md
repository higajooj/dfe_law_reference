<!-- p.23 -->
# 4.2.2 Parâmetros da URL do QR Code na emissão em contingência OFFLINE

| Posição | Descrição do Parâmetro | Bytes | Orientações de preenchimento |
|---|---|---|---|
| 1º | Chave de Acesso da NFC-e | 44\* | Informar a chave de acesso da NFC-e |
| 2º | Versão do QR Code | 1\* | Para esta versão de documento, preencher o com “2”. |
| 3º | Identificação do Ambiente (1 – Produção, 2 – Homologação) | 1\* | Informar valor do campo B24 do leiaute NFC-e |
| 4º | Dia da data de emissão | 2\* | Informar o dia da data de emissão, que consta no campo B09 do leiaute NFC-e. O valor deverá ter exatamente dois dígitos. |
| 5º | Valor Total da NFC-e | 15 | Informar valor do campo W16 do leiaute NFC-e. O valor deve ser informados com ponto (“.”) como separador decimal; não informar separador de milhar ou sinais. |
| 6º | DigestValue da NFC-e | 56\* | Corresponde ao algoritmo SHA1 sobre o arquivo XML da NFC-e, convertido para formato hexadecimal. Ao se efetuar a assinatura digital da NFC-e emitida em contingência off-line, o campo digestvalue constante da XML Signature deve obrigatoriamente ser idêntico ao encontrado quando da geração do digestvalue para a montagem QR Code. |
| 7º | Identificador do CSC (Código de Segurança do Contribuinte no Banco de Dados da SEFAZ) | 1-6 | Deve ser informado sem os “0” (zeros) não significativos. A identificação do CSC corresponde a ordem do CSC no banco de dados da SEFAZ, não confundir com o próprio CSC. |
| 8º | Código Hash dos Parâmetros | 40\* | Ver geração do Hash do QR Code na emissão contingência offline na seção 4.3.2 deste documento. |

*Tabela 3: Relação de Parâmetros da URL do QR Code para NFC-e OFFLINE*

O asterisco (\*) na tabela acima indica que o preenchimento deve ser exato com a quantidade de bytes indicada.

Dessa forma, o **modelo** da URL na emissão contingência offline, será:

```text
http://<dominio>/nfce/qrcode/?p=<chave_acesso>|<versao_qrcode>|<tipo_ambiente>|<dia_data_emissao>|<valor_total_nfce>|<digVal>|<identificador_csc>|<codigo_hash>
```
