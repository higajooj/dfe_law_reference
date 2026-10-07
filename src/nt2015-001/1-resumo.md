<!-- p.5 -->
# 1. Resumo

Esta Nota Técnica apresenta a especificação técnica necessária para a implementação do pedido de prorrogação da suspensão do ICMS na remessa para industrialização após decorridos 180 dias.

O Evento de pedido de prorrogação substitui uma petição em papel do contribuinte, frente à administração pública, com um arquivo xml assinado.

O evento será utilizado pelo contribuinte e o alcance das alterações permitidas é definido no CONVÊNIO AE-15/74:

> “Os Secretários de Fazenda dos Estados e do Distrito Federal, reunidos em Brasília, DF, no dia 11 de dezembro de 1974, resolvem celebrar o seguinte CONVÊNIO.
>
> (...)
>
> Cláusula primeira Os signatários acordam em conceder suspensão do Imposto sobre Operações Relativas à Circulação de Mercadorias nas remessas interestaduais de produtos destinados a conserto, reparo ou industrialização, desde que as mesmas retornem ao estabelecimento de origem no prazo de 180 (cento oitenta) dias, contados da data das respectivas saídas, prorrogáveis por mais cento e oitenta dias, admitindo-se, excepcionalmente, uma segunda prorrogação de igual prazo.
>
> (...)
>
> § 1º O disposto nesta cláusula não se aplica às saídas de sucatas e de produtos primários de origem animal, vegetal ou mineral, salvo se a remessa e o retorno se fizerem nos termos de protocolos celebrados entre os Estados interessados.
>
> (...)
>
> § 2º A suspensão nas remessas interestaduais para industrialização promovidas por estabelecimentos localizados no Estado de Mato Grosso do Sul fica condicionada à existência de autorização específica concedida pela Secretaria de Estado de Fazenda desse Estado.
>
> (...)
>
> Cláusula segunda O presente Convênio passa a vigorar a partir de 1º de janeiro de 1975.
>
> (...)
>
> Signatários: AC, AL, AM, BA, CE, DF, ES, GB, GO, MA, MG, MT, PA, PB, PE, PI, PR, RJ, RN, RS, SC, SE e SP.”

As UFs que determinarem em sua legislação local a suspensão do ICMS podem utilizar o mesmo recurso para receberem os pedidos de prorrogação de operações internas. Por enquanto, apenas São Paulo e Minas Gerais adotam esta NT.

Esta NT define o layout e a operacionalização da petição da prorrogação da suspensão do ICMS e seu deferimento através dos seguintes eventos:

- Evento Pedido de Prorrogação 1º. prazo (tpEvento=111500, “EPP1”)
- Evento Pedido de Prorrogação 2º. prazo (tpEvento=111501, “EPP2”)
- Evento Cancelamento de Pedido de Prorrogação 1º prazo (tpEvento=111502, “ECPP1”)
- Evento Cancelamento de pedido de Prorrogação 2° prazo (tpEvento=111503, “ECPP2”)
- Evento Fisco Resposta ao Pedido de Prorrogação 1º prazo (tpEvento=411500, “EFPP1”)
- Evento Fisco Resposta ao Pedido de Prorrogação 2º prazo (tpEvento=411501, “EFPP2”)
- Evento Fisco Resposta ao Cancelamento de Prorrogação 1º prazo (tpEvento=411502, “EFCPP1”)
- Evento Fisco Resposta ao Cancelamento de Prorrogação 2º prazo (tpEvento=411503, “EFCPP2”)
