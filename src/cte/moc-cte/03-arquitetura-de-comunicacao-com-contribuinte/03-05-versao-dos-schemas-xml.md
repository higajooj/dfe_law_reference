<!-- p.22 -->

# 3.5. Versão dos Schemas XML

A maioria dos Schemas XML do CTe utilizam as definições de tipos básicos ou tipos complexos que estão definidos em outros Schemas XML (ex.: tiposGeralCTe_v4.00.xsd, etc.), nestes casos, a modificação de versão do Schema básico será repercutida no Schema principal.

Por exemplo, o tipo numérico de 15 posições com 2 decimais é definido no Schema tiposGeralCT_v4.00.xsd, caso ocorra alguma modificação na definição deste tipo, todos os Schemas que utilizam este tipo básico devem ter a sua versão atualizada e as declarações “import” ou “include” devem ser atualizadas com o nome do Schema básico atualizado.

As modificações de leiaute das mensagens dos Web Services podem ser causadas por necessidades técnicas ou em razão da modificação de alguma legislação. As modificações decorrentes de alteração da legislação deverão ser implementadas nos prazos previstos na norma que introduziu a alteração. As modificações de ordem técnica serão divulgadas pela Coordenação Técnica do ENCAT e poderão ocorrer sempre que se fizerem necessárias.

## 3.5.1 Liberação das versões dos schemas para o CTe

Os schemas válidos para o CTe serão disponibilizados no sítio nacional do Projeto (www.cte.fazenda.gov.br) ou no portal da SVRS (dfe-portal.svrs.rs.gov.br/cte), e serão liberados após autorização da equipe de Gestão do Projeto formada pelos Líderes dos Projetos nos Estados e representante das Empresas.

A cada nova liberação de schema será disponibilizado um arquivo compactado contendo o conjunto de schemas a serem utilizados pelos contribuintes para a geração dos arquivos XML. Este arquivo será denominado “Pacote de Liberação” e terá a mesma numeração da versão do Manual de Orientações que lhe é compatível. Os pacotes de liberação serão identificados pelas letras “PL_CTe”, seguida do número da versão do Manual de Orientações correspondente. Exemplificando: O pacote PL_CTe_4.00.zip representa o “Pacote de Liberação” de schemas do CTe compatíveis com o Manual de Orientações do Contribuinte – versão 4.00.

Os schemas XML das mensagens XML são identificados pelo seu nome, seguido da versão do respectivo schema.

Assim, para o schema XML de “cte”, corresponderá um arquivo com a extensão “.xsd”, que terá o nome de “cte_v9.99.xsd”, onde v9.99, corresponde a versão do respectivo schema.

<!-- p.23 -->

Para identificar quais os schemas que sofreram alteração em um determinado pacote liberado, deve-se comparar o número da versão do schema deste pacote com o do pacote anterior.

## 3.5.2 Correção de Pacote de Liberação

Em alguma situação pode surgir a necessidade de correção de um Schema XML por um erro de implementação de regra de validação, obrigatoriedade de campo, nome de tag divergente do definido no leiaute da mensagem, que não modifica a estrutura do Schema XML e nem exige a alteração dos aplicativos da SEFAZ ou dos contribuintes.

Nesta situação, divulgaremos um novo pacote de liberação com o Schema XML corrigido, sem modificar o número da versão do PL para manter a compatibilidade com o Manual de Orientações do Contribuinte vigente.

A identificação dos pacotes mais recentes se dará com o acréscimo de letras minúscula do alfabeto, como por exemplo: CTe_PL_4.00a.ZIP, indicando que se trata da primeira versão corrigida do CTe_PL_4.00.ZIP.

## 3.5.3 Divulgação de novos Pacotes de Liberação

A divulgação de novos pacotes de liberação ou atualizações de pacote de liberação será realizada através da publicação de Notas Técnicas no Portal Nacional do CTe com as informações necessárias para a implementação dos novos pacotes de liberação.

## 3.5.4 Controle de Versão

O controle de versão de cada um dos schemas válidos do CTe compreende uma definição nacional:

Qual a versão vigente (versão mais atualizada)?

Quais são as versões anteriores ainda suportadas por todas as SEFAZ?

Quais são as versões da parte específica de cada modal suportadas pela parte genérica?

Este controle de versão permite a adaptação dos sistemas de informática dos contribuintes participantes do Projeto em diferentes datas. Ou seja, alguns contribuintes poderão estar com uma versão de leiaute mais atualizada, enquanto outros poderão ainda estar operando com mensagens em um leiaute anterior.

Não estão previstas mudanças frequentes de leiaute de mensagens e os contribuintes deverão ter um prazo razoável para implementar as mudanças necessárias, conforme acordo operacional a ser estabelecido.

<!-- p.24 -->

Mensagens recebidas com uma versão de leiaute não suportada serão rejeitadas com uma mensagem de erro específica na versão do leiaute de resposta mais recente em uso.
