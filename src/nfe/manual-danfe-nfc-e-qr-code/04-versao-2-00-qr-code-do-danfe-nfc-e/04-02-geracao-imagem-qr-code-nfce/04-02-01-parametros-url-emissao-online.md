# 4.2.1 Parâmetros da URL do QR Code na emissão ONLINE

| Posição | Descrição do Parâmetro | Bytes | Orientações de preenchimento |
|---|---|---|---|
| 1º | Chave de Acesso da NFC-e | 44\* | Informar a chave de acesso da NFC-e |
| 2º | Versão do QR Code | 1\* | Para esta versão de documento, preencher o com “2”. |
| 3º | Identificação do Ambiente (1 – Produção, 2 – Homologação) | 1\* | Informar valor do campo B24 do leiaute NFC-e. |
| 4º | Identificador do CSC (Código de Segurança do Contribuinte no Banco de Dados da SEFAZ) | 1-6 | Deve ser informado sem os “0” (zeros) não significativos. A identificação do CSC corresponde a ordem do CSC no banco de dados da SEFAZ, não confundir com o próprio CSC. |
| 5º | Código Hash dos Parâmetros | 40\* | Ver geração do Hash do QR Code na emissão Online na seção 4.3.1 deste documento. |

*Tabela 2: Relação de Parâmetros da URL do QR Code para NFC-e ONLINE*

O asterisco (\*) na tabela acima indica que o preenchimento deve ser exato com a quantidade de bytes indicada.

Dessa forma, o **modelo** da URL na emissão online, será:

```text
http://<dominio>/nfce/qrcode?p=<chave_acesso>|<versao_qrcode>|<tipo_ambiente>|<identificador_csc>|<codigo_hash>
```
