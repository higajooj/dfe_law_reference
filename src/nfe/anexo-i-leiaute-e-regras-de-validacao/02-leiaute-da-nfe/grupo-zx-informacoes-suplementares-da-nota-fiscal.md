<!-- p.66 -->

# Grupo ZX. Informações Suplementares da Nota Fiscal

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **424** | **infNFeSupl (ZX01)** | **G** | **Raiz** | **-** | **0-1** |  | **Informações suplementares da Nota Fiscal<br>Informações suplementares da Nota Fiscal, não afetando a assinatura digital. (NT 2015.002)** |
| 425 | qrCode (ZX02) | E | ZX01 | C | 1-1 100-600 |  | Texto com o QR-Code impresso no DANFE NFC-e. Obs.: URLs, por UF, utilizadas para consulta QR Code acesse: http://nfce.encat.org/desenvolvedor/qrcode/<br>Ver orientações de preenchimento na seção 3.3 deste documento. |
| 426 | urlChave (ZX03) | E | ZX01 | C | 1-1 | 21-85 | Texto com a URL de consulta por chave de acesso a ser impressa no DANFE NFC-e. Obs.: URLs, por UF, utilizadas para consulta por chave de acesso acesse: http://nfce.encat.org/consumidor-nfce/consulte-nota- nfce/<br>Informar a URL da “Consulta por chave de acesso da NFC- e”. A mesma URL que deve estar informada no DANFE NFC- e para consulta por chave de acesso. |
