<!-- p.124 -->

# 6.2. Distribuição de Documentos Autorizados e Informações de B2B

No próximo item, é definida a forma de compartilhamentos dos documentos autorizados pela SEFAZ (NF-e, Cancelamento e Evento).

É possível também a distribuição de informações unicamente em um padrão B2B mais amplo, incluindo informações relacionadas com a logística de entrega, transporte e armazenamento das mercadorias que estão sendo transitadas entre os diferentes entes. Na adoção deste modelo mais amplo, é aconselhável evitar a definição de padrões específicos de determinada empresa, tentando adotar padrões setoriais, nacionais ou internacionais, que atendam um maior número de empresas emitentes ou destinatárias de NF-e, diminuindo o custo de customizações específicas.

De uma forma geral, esta estrutura de dados que engloba as informações dos documentos autorizados e as informações de logística da circulação de mercadorias entre as empresas, obedece a um padrão, conforme exemplo apresentado na Tabela 6-1

**Tabela 6-1 – Exemplo de Estrutura de Dados Sobre Logística de Circulação de Mercadorias**

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| VR01 | nfeProcB2B | Raiz | - | - | - | - | TAG raiz |
| VR02 | nfeProc | G | VR01 | xml | 1-1 | - | Estrutura de dados da distribuição |
| VR03 | NFe | G | VR02 | xml | 1-1 | - | |
| VR04 | (dados) | - | - | - | - | - | Dados da NFe, inclusive com os dados da assinatura |
| VR05 | protNfe | G | VR02 | xml | 1-1 | - | Protocolo de autorização ou denegação de uso do NF-e, conforme descrito no item 5.2.2. |
| <!-- p.125 --> VR06 | (dados) | - | - | - | - | - | |
| VR07 | NFeB2B | G | VR01 | xml | 0-1 | - | |
| VR08 | xIntegrador | A | VR07 | C | 1-1 | 2-15 | Identificador da organização, empresa ou entidade mantenedora do padrão de interface B2B.Exemplo: “ANFAVEA”, “GS1”, (...), “XYZ”. |
| VR09 | xSetor | A | VR07 | C | 1-1 | 2-15 | Identificador do setor ou área a que se refere o padrão B2B, mantido pelo Integrador.Exemplo:-<br>xIntegrador=”XYZ”, xSetor=”Geral”;-<br>xIntegrador=”XYZ”, xSetor=”Veículo”;-<br>xIntegrador=”XYZ”, xSetor=”Medicamento” |
| VR10 | Versão | A | VR07 | C | 1-1 | 4-5 | Versão do leiaute desta área/setor de padronização B2B. Exemplo: “1.00”. |
| VR11 | (dados) | - | VR07 | - | - | - | |
