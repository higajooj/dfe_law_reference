<!-- p.9 -->
# 3.4. Grupo N06. Grupo Tributação do ICMS= 40, 41, 50

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **202** | **N06** | **ICMS40** | **Grupo Tributação ICMS = 40, 41, 50** | **CG** | **N01** | | **1-1** | | **Tributação Isenta, Não tributada ou Suspensão.** |
| ... | ... | ... | ... | ... | ... | ... | ... | ... | ... |
| **204.00** | **N27.1** | **-x-** | **Sequência XML** | **G** | **N06** | | **0-1** | | **Grupo opcional.** |
| 204.01 | N28a | vICMSDeson | Valor do ICMS desonerado | E | N27.1 | N | 1-1 | 13v2 | Informar nas operações:<br>a) com produtos beneficiados com a desoneração condicional do ICMS.<br>b) destinadas à SUFRAMA, informando-se o valor que seria devido se não houvesse isenção.<br>c) de venda a órgão da administração pública direta e suas fundações e autarquias com isenção do ICMS. (NT 2011/004)<br>d) demais casos solicitados pelo Fisco. (NT2016.002) |
| 204.02 | N28 | motDesICMS | Motivo da desoneração do ICMS | E | N27.1 | N | 1-1 | 2 | Campo será preenchido quando o campo anterior estiver preenchido. Informar o motivo da desoneração:<br>1=Táxi;<br>3=Produtor Agropecuário;<br>4=Frotista/Locadora;<br>5=Diplomático/Consular;<br>6=Utilitários e Motocicletas da Amazônia Ocidental e Áreas de Livre Comércio (Resolução 714/88 e 790/94 – CONTRAN e suas alterações);<br>7=SUFRAMA;<br>8=Venda a Órgão Público;<br>9=Outros. (NT 2011/004);<br>10=Deficiente Condutor (Convênio ICMS 38/12);<br>11=Deficiente Não Condutor (Convênio ICMS 38/12);<br>16=Olimpíadas Rio 2016 (NT 2015.002);<br>90=Solicitado pelo Fisco (NT2016.002)<br>Revogada a partir da versão 3.10 a possibilidade de usar o motivo 2=Deficiente Físico |
| 204.03 | N28b | indDeduzDeson | Indica se o valor do ICMS desonerado (vICMSDeson) deduz do valor do item (vProd). | E | N27.1 | N | 0-1 | 1 | O campo só pode ser preenchido com:<br>0=Valor do ICMS desonerado (vICMSDeson) não deduz do valor do item (vProd) / total da NF-e.<br>1=Valor do ICMS desonerado (vICMSDeson) deduz do valor do item (vProd) / total da NF-e. |
