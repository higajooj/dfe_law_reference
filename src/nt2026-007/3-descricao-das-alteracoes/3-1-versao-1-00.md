<!-- p.5 -->
# 3.1. Versão 1.00

1. Campo C17 – Ocorrência alterada para 0-1. Permitindo que emitente contribuinte exclusivo do IBS/CBS (não contribuinte do ICMS) não informe a IE.
2. RV B25-90 – Incluída a exceção 2 para não aplicar regra para contribuinte exclusivo do IBS/CBS (sem a IE do emitente)
3. RV C17-10 – Regra de validação excluída, porque a ausência da IE do emitente deixa de ser motivo de rejeição na NF-e (modelo 55), passando a caracterizar o emitente como contribuinte exclusivo do IBS/CBS, sujeito à verificação no CCC. Para a NFC-e (modelo 65), a ausência da IE do emitente passa a ser rejeitada pela regra C17-42. A IE informada preenchida com zeros permanece rejeitada pela regra C17-20 (rejeição 209 – IE do emitente inválida).
4. 5E17-70 – Regra de validação excluída, por ter sido substituída pelas regras da LCC-RFB.
5. RV B02-10, C12-10 e P12-40 – Regras alteradas: incluída exceção para que a divergência entre a UF do emitente/Chave de Acesso e a UF do Web Service não seja rejeitada na SVRS quando se tratar de contribuinte exclusivo do IBS/CBS (NF-e sem a IE do emitente).
6. RV C17-11, C17-42, C17-43, C18-50 – Regras incluídas: autorização exclusiva na SVRS, vedação de NFC-e até 2033, obrigatoriedade de CNPJ e vedação de IEST para o contribuinte exclusivo do IBS/CBS.
7. RV I08-191 – Regra incluída: restrição de CFOP conforme tabela IT 2023.002 (coluna indExcIBSCBS).
8. RV N01-10 e UB12-11 – Regras incluídas: tratamento dos grupos de tributos (ICMS proibido e IBS/CBS obrigatório) conforme a condição do emitente.
9. RV 12C02-10/20, 12C21-20, 1P10-30 e 1P10-32 – Regras incluídas: verificações do cadastro LCC-RFB (emitente, destinatário, locais de retirada e entrega, e eventos).
10. RV 5AF15-10/11/12, 5AF17-10/20/30, 5BG15-10/11/12 e 5BG17-10/20 – Verificações no CCC dos locais de retirada e de entrega.
11. RV 1P10-40 – Regra incluída: direcionamento dos eventos de autoria do emitente contribuinte exclusivo do IBS/CBS para a SVRS.
