<!-- p.13 -->

# 2.9 Inserção do campo “verCalcIBSCBS” na NFS-e

A alteração tem por objetivo destacar, no documento fiscal, informação acerca da versão da Calculadora de Tributos (IBS/CBS) utilizada na geração da NFS-e. Trata-se de informação que será gerada pela SEFIN Nacional da NFS-e, ou seja, notas autorizadas/geradas a partir dos emissores públicos nacionais (“ambGer” = 2). Dessa forma, essa informação não será exigida para notas autorizadas em ambientes próprios municipais e posteriormente compartilhadas com o repositório nacional (ADN).

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| NFSe/infNFSe/ | verCalcIBSCBS | E | C | 0-1 | 1-20 | Versão da Calculadora de Tributos (IBS/CBS) que gerou a NFS-e. |
