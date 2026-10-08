# 9.2 Imagem do QR Code para MDFe

A imagem do QR Code, que será impressa no DAMDFE conterá uma URL composta com as seguintes informações:

## 9.2.1 Para MDFe com tipo de emissão Normal:

1ª parte - Endereço do site da Portal Nacional do MDFe, seguido do caractere "?"; exemplo: http://dfe-portal.svrs.rs.gov.br/mdfe/QRCode

Os endereços de consulta a serem utilizados no QR Code em ambiente de produção e ambiente de homologação estão disponíveis no Portal Nacional do MDFe (http://dfe-portal.svrs.rs.gov.br/mdfe).

Observação: O portal do ambiente nacional do MDFe utiliza o mesmo endereço para consulta no ambiente de produção e ambiente de homologação. Neste caso, a distinção entre os ambientes de consulta será feita diretamente pela aplicação, a partir do conteúdo do parâmetro de identificação do ambiente (tpAmb), constante do QR Code.

2ª parte – Parâmetros para consultar a chave de acesso de MDFe separados pelo caractere "&";

- chMDFe: chave de acesso do MDFe (44 caracteres)
- tpAmb: Identificação do ambiente (1 – Produção; 2 – Homologação)

Exemplo:

```text
http://dfe-portal.svrs.rs.gov.br/mdfe/QRCode?chMDFe=43181207312871000190580010000334041421310776&tpAmb=1
```

## 9.2.2 Para MDFe com tipo de emissão Contingência Off-Line:

Documentos emitidos em contingência demandam um conjunto de informações adicionais às informadas no MDFe normal para garantia de autoria do documento fiscal que pode não ter sido transmitido para a base do Ambiente Autorizador. Neste caso, o QR Code deverá conter:

<!-- p.74 -->

- 1ª parte - URL para acessar o MDFe, seguido do caractere "?"
- 2ª parte - parâmetros chMDFe e tpAmb da mesma forma como na forma de emissão normal separados pelo caractere "&";
- 3ª parte – sign assinatura digital no padrão RSA SHA-1 (Base64) do valor do parâmetro chMDFe (chave de acesso com 44 caracteres) a partir do certificado digital que assina o MDFe, este parâmetro deve ser adicionado aos demais usando um caractere "&" como separador.

| Parte | Conteúdo |
|---|---|
| 1ª parte: URL | http://dfe-portal.svrs.rs.gov.br/mdfe/QRCode |
| 2ª parte: parâmetros | chMDFe=43181207312871000190580010000334041421310776&tpAmb=1 |
| 3ª parte: assinatura | &sign=ZZSHiypy7fHg22MUv6TUh71EI+wLYWr/fUHJy3PyWnL7d5mzEqtxu6bVbhE7AeNiDTirh1u9/gVfC2Hw+Lsno2XNL5FRUc5NcuMTT2hA6E9HYC9gryvtWAIgiCZUNG5cWWLCh0G62QdnNe8iSr/lSooQu9Z5g1vbGaTFMxaugzzvo= |

Gerar o QR Code com as concatenações das três partes (URL + parâmetros + assinatura).
