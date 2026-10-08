<!-- p.8 -->
# 01. Resumo

Esta Nota Técnica altera o leiaute da NF-e para receber as informações correspondentes ao ICMS devido para a Unidade da Federação de Destino, nas operações interestaduais de venda para consumidor final não contribuinte, atendendo as definições da Emenda Constitucional 87/2015.

Também visa atender à necessidade de identificar o Código Especificador da Substituição Tributária – CEST, que estabelece a sistemática de uniformização e identificação das mercadorias e bens passíveis de sujeição aos regimes de substituição tributária e de antecipação de recolhimento do ICMS com o encerramento de tributação, relativos às operações subsequentes, conforme definições do Convênio ICMS 92, de 20 de agosto de 2015.

O prazo previsto para a implementação das mudanças é:

- **Ambiente de** Homologação (ambiente de teste das empresas): 01/10/15;
- **Ambiente de Produção**: 01/12/2015.
  - A implantação do novo schema XML em produção será efetuada no dia 30-nov-2015 após às 12h desse dia em todos os ambientes de autorização.
  - A implantação da nova versão da aplicação das SEFAZ autorizadoras será feita no dia 01-dez-2015 até às 12h desse dia em todos os ambientes de autorização.

**Nota 1**: Observado que, embora a publicação em produção esteja prevista para a data 01/12/2015, o novo grupo de informações do ICMS para a UF de destino somente poderá ser utilizado, em produção, a partir de 01/01/2016, respeitando a legislação vigente. As regras poderão ser testadas no ambiente de homologação.

**Nota 2**: O grupo de tributação do ICMS para a UF de destino poderá ser utilizado para ajustes de lançamentos realizados para consumidor final não contribuinte de outras UFs, como por exemplo, nota fiscal de entrada de devoluções de mercadorias emitida pelo remetente da UF de origem.

**O prazo para implantação das alterações trazidas pela versão 1.94 desta NT é:**

- **Ambiente de Homologação** (ambiente de teste das empresas): 28-jun-2017;
- **Ambiente de Produção**: 30-jun-2017.
