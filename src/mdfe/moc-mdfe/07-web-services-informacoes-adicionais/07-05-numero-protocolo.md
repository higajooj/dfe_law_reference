# 7.5 Número do protocolo

O número do protocolo é gerado pelo Ambiente Autorizador para identificar univocamente as transações realizadas de autorização de uso e registro de eventos do MDFe.

A regra de formação do número do protocolo é:

| Ano (4 posições) | Tipo de Autorizador (1 posição) | Código da UF (2 posições) | Sequencial de 10 posições |
|---|---|---|---|
| 9 9 9 9 | 9 | 9 9 | 9 9 9 9 9 9 9 9 9 9 |

Legenda da formação:

- 1 posição com o Tipo de Autorizador (9 = Ambiente Nacional do MDFe ou 2=Site Alternativo do Ambiente Nacional do MDFe);
- 2 posições para o código da UF do IBGE;
- 2 posições para o ano;
- 10 posições numéricas sequenciais no ano.

A geração do número de protocolo deverá ser única, sendo utilizada por todos os Web Services que precisam atribuir um número de protocolo para o resultado do processamento.

Juntamente ao protocolo, no DAMDFE aparecerá a data (DD/MM/AAAA) e hora (hh:mm:ss).
