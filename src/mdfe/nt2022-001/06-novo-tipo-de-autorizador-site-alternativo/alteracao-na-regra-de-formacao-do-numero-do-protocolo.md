# Alteração na regra de formação do número do protocolo

<!-- p.15 -->

O número do protocolo é gerado pelo Ambiente Autorizador para identificar univocamente as transações realizadas de autorização de uso e registro de eventos do MDFe.

A regra de formação do número do protocolo é:

| Tipo de Autorizador | Código da UF | Ano | Sequencial de 10 posições |
|---|---|---|---|
| 9 | 9 9 | 9 9 | 9 9 9 9 9 9 9 9 9 9 |

- 1 posição com o Tipo de Autorizador (9 = Ambiente Nacional do MDFe ou 2 = Site Alternativo de Autorização do Ambiente Nacional);
- 2 posições para o código da UF do IBGE;
- 2 posições para o ano;
- 10 posições numéricas sequenciais no ano.
