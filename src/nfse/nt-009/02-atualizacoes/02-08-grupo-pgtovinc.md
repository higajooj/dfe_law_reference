<!-- p.13 -->

# 2.8 Criação do grupo “gPgtoVinc”

Grupo responsável pelas informações da vinculação da NFS-e à transação de pagamento relacionada, quando essas informações puderem ser disponibilizadas até o momento da emissão do documento fiscal (evento com mesma estrutura será implementado para que seja registrado nos casos em que a informação de pagamento só poderá ser informada após a emissão do documento fiscal). Poderão ser vinculadas até 99 (noventa e nove) transações de pagamento para uma mesma NFS-e:

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| **NFSe/infNFSe/DPS/infDPS/IBSCBS/** | **gPgtoVinc** | **G** | **-** | **0-1** | **-** | **Grupo de informações da vinculação com a transação de pagamento** |
| **NFSe/infNFSe/DPS/infDPS/IBSCBS/gPgtoVinc/** | **pgto** | **G** | **-** | **1-99** | **-** | **Dados dos pagamentos vinculados à NFS-e** |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/gPgtoVinc/pgto/ | nPag | E | N | 1-1 | 3 | Numerador único de cada pagamento |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/gPgtoVinc/pgto/ | idTransacao | E | C | 1-1 | 2-35 | Identificador específico da transação financeira, de acordo com o pagamento. |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/gPgtoVinc/pgto/ | tpMeioPgto | E | N | 1-1 | 2 | Código do meio de pagamento utilizado:<br>15 = Boleto;<br>17 = Pix QRCode dinâmico;<br>18 = TED;<br>20 = PIX chave ou QRCode estático;<br>23 = Pix automático;<br>24 = TEF / booktransfer |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/gPgtoVinc/pgto/ | CNPJReceb | E | C | 1-1 | 14 | CNPJ completo do recebedor do pagamento (fornecedor, plataforma, ou outra entidade que receba o pagamento do adquirente). |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/gPgtoVinc/pgto/ | CNPJBasePSP | E | C | 1-1 | 8 | CNPJ base da instituição financeira ou de pagamento utilizada pelo recebedor do pagamento (fornecedor, plataforma, ou outra entidade que receba o pagamento do adquirente). |
