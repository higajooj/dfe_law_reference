<!-- p.45 -->
# 7. Orientação de preenchimento na venda de óleo diesel B realizada por refinaria de petróleo ou suas bases

Na venda de óleo diesel B realizada pela refinaria de petróleo ou suas bases, quando o ICMS monofásico ainda não tiver incidido sobre a parcela correspondente ao óleo diesel A ou C, mas já tiver incidido, na saída do produtor, sobre o biocombustível correspondente ao percentual obrigatório de adição, conforme a proporção prevista na alínea “c” do inciso VI da cláusula segunda do Convênio ICMS nº 199/22, a emissão da NF-e deverá seguir as especificações abaixo, além do atendimento aos demais requisitos legais aplicáveis.

| Campo | Descrição do Campo | Valor | Observações |
|---|---|---|---|
| xProd | Descrição do produto ou serviço | [Nome do óleo Diesel B] | Deverá ser informado somente um item, sendo de Diesel B |
| qCom | Quantidade Comercial | [Quantidade de óleo Diesel B] | Quantidade de óleo Diesel B sendo vendida |
| cProdANP | Código de produto da ANP | [Código ANP do óleo Diesel B] | Utilizar a Tabela de Código de Produtos da ANP, publicada no Portal Nacional da NF-e, no grupo “Documentos”, opção “Diversos” |
| ICMS15 | Grupo Tributação do ICMS monofásico | [ICMS15] | Tributação monofásica própria e com responsabilidade pela retenção sobre combustíveis |
| qBCMono | Quantidade tributada | [Quantidade da BC do ICMS Monofásico] | Quantidade da BC do ICMS Monofásico, conforme o percentual de Diesel A no Diesel B |
| adRemICMS | Alíquota ad rem do imposto | [Alíquota ad rem do Diesel A] | Valor da alíquota ad rem do Diesel A |
| vICMSMono | Valor do ICMS próprio | [Valor do ICMS monofásico próprio] | Destaque do ICMS monofásico do Diesel A |
| qBCMonoReten | Quantidade tributada sujeita a retenção | [Quantidade da BC do ICMS Monofásico por Retenção] | Quantidade da BC do ICMS Monofásico, conforme o percentual de biocombustível que deverá ser retido pela refinaria |
| adRemICMSReten | Alíquota ad rem do imposto com retenção | [Alíquota ad rem do biocombustível] | Valor da alíquota ad rem do biocombustível |
| vICMSMonoReten | Valor do ICMS com retenção | [Valor do ICMS monofásico retido] | Destaque do ICMS monofásico com retenção do biocombustível |
| infAdProd | Informações Adicionais do Produto | [Informação adicional com o valor do ICMS Monofásico recolhido pelo produtor de biocombustível] | No campo infAdProd poderá ser informado o valor recolhido pelo produtor do biocombustível no qual deverá ser utilizado a fórmula [qBCMonoReten * adRemICMSReten * 0,6667], conforme previsto na alínea “c” do inciso VI da cláusula segunda do Convênio ICMS nº 199/22 |

<!-- p.46 -->
Exemplo de XML para o preenchimento de venda de 1000 litros de “Óleo Diesel B S10 – Comum” pela refinaria:

```xml
<xProd>Oleo Diesel B S10 – Comum</xProd>
...
<uCom>L</uCom>
<qCom>1000</qCom>
...
<cProdANP>820101034</cProdANP>
....
<ICMS15>
  <orig>0</orig>
  <CST>15</CST>
  <qBCMono>860.00</qBCMono>
  <adRemICMS>1.12</adRemICMS>
  <vICMSMono>963.20</vICMSMono>
  <qBCMonoReten>140.00</qBCMonoReten>
  <adRemICMSReten>1.12</adRemICMSReten>
  <vICMSMonoReten>52.26</vICMSMonoReten>
</ICMS15>
<infAdProd>ICMS Monofásico Retido pelo produtor de biocombustível igual a R$104.54</infAdProd>
```
