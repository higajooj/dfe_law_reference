<!-- p.8 -->
# 03.1 Leiaute da Nota Fiscal Eletrônica (Anexo I do MOC)

## Grupo ZX. Informações Suplementares da Nota Fiscal

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **424** | **ZX01** | **infNFeSupl** | **Informações suplementares da Nota Fiscal** | **G** | **Raiz** | **-** | **0-1** | | **Informações suplementares da Nota Fiscal, não afetando a assinatura digital. (NT 2015.002)** |
| 425 | ZX02 | qrCode | Texto com o QR-Code impresso no DANFE NFC-e.<br>Obs.: URLs, por UF, utilizadas para consulta QR Code acesse: http://nfce.encat.org/desenvolvedor/qrcode/ | E | ZX01 | C | 1-1 | 60-1000 | Ver orientações de preenchimento no item “04-Preenchimento da URL do QR Code” deste documento. |
| 426 | ZX03 | urlChave | Texto com a URL de consulta por chave de acesso a ser impressa no DANFE NFC-e.<br>Obs.: URLs, por UF, utilizadas para consulta por chave de acesso acesse: http://nfce.encat.org/consumidor/consultenota/ | E | ZX01 | C | 1-1 | 21-85 | Informar a URL da “Consulta por chave de acesso da NFC-e”. A mesma URL que deve estar informada no DANFE NFC-e para consulta por chave de acesso. |
