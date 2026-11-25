<!-- p.80 -->

# 8. Uso Indevido

A análise do comportamento atual das aplicações das empresas (“aplicação cliente”) permite identificar algumas situações de “uso indevido” nos ambientes autorizadores.

Como exemplo maior do mau uso do ambiente, ressalta-se a falta de controle de algumas aplicações que entram em “loop”, consumindo recursos de forma indevida, sobrecarregando principalmente o canal de comunicação com a Internet.

Para evitar esses problemas serão mantidos controles para identificar as situações de uso indevido de sucessivas tentativas de busca de registros já disponibilizados anteriormente.

As novas tentativas serão rejeitadas com o erro “678–Rejeição: Consumo Indevido”.

As subseções deste capítulo estão em:

- [8.1. Erros e problemas comuns](08-01-erros-e-problemas-comuns.md)
- [8.2. Regras de Validação de Consumo Indevido](08-02-regras-de-validacao-de-consumo-indevido.md)
