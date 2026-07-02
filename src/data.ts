export interface CardData {
  title: string;
  value: string;
  detail: string;
  iconType: 'trending-up' | 'alert-circle' | 'zap' | 'map' | 'target' | 'bar-chart';
}

export interface RegionData {
  name: string;
  volume: string;
  cpl: string;
  status: string;
  type: 'success' | 'warning' | 'danger' | 'neutral';
}

export interface StrategyData {
  title: string;
  description: string;
  type: 'action' | 'risk';
}

export interface ViewContentData {
  title: string;
  subtitle: string;
  cards: CardData[];
  regions: RegionData[];
  strategies: StrategyData[];
}

export const verticalData: ViewContentData = {
  title: "Escala Vertical",
  subtitle: "Otimização e aumento de investimento em campanhas de alta performance.",
  cards: [
    { 
      title: "Prioridade 1", 
      value: "Escalar Maricá e Saquarema", 
      detail: "Maiores volumes de conversão. Remanejar 20% da verba das regiões ruins para cá (sem injetar orçamento extra global). Não testar novas ofertas neste momento.", 
      iconType: "trending-up" 
    },
    { 
      title: "Alerta Crítico", 
      value: "Monitoramento de CAC", 
      detail: "Se o CAC/CPL subir, revertemos a verba ao normal, analisamos as causas (sazonalidade, leilão, concorrentes) e reportamos os motivos antes de qualquer nova escala.", 
      iconType: "alert-circle" 
    },
    { 
      title: "Apoio Estratégico", 
      value: "Rotação Criativa", 
      detail: "Manteremos a performance rotacionando formatos (imagem ↔ vídeo curto) e criativos focados em 'Dor + Benefício' para evitar fadiga.", 
      iconType: "zap" 
    }
  ],
  regions: [
    { name: "Maricá", volume: "Maior volume de leads", cpl: "Google: ~R$ 13,30 | Meta: ~R$ 12,50", status: "Orçamento: de R$ 628 para R$ 754 (+20%)", type: "success" },
    { name: "Saquarema e Unamar", volume: "Bom volume de leads", cpl: "Google: ~R$ 15,70 | Meta: ~R$ 14,50", status: "Orçamento: de R$ 612 para R$ 734 (+20%)", type: "success" },
    { name: "MG (Benfica)", volume: "Médio volume", cpl: "Google: ~R$ 11,87 | Meta: ~R$ 10,90", status: "Orçamento: Mantido em R$ 400 (Estabilidade)", type: "warning" }
  ],
  strategies: [
    { title: "Plano de Ação: Gestão de Search", description: "Focaremos nosso esforço diário de otimização no Google Ads para Maricá e Saquarema/Unamar, onde já possuímos maturidade de conversão para WhatsApp.", type: "action" },
    { title: "Plano de Ação: Rebalanceamento de Verba", description: "Cortaremos parte da verba do funil padrão de Vila Velha e Muqui & Mimoso, deixando nestas apenas o orçamento isolado para teste da oferta de 700 Mega. O excedente irá para Maricá e Saquarema.", type: "action" }
  ]
};

export const horizontalData: ViewContentData = {
  title: "Escala Horizontal",
  subtitle: "Expansão para novas regiões e adjacências baseada em aprendizados validados.",
  cards: [
    { 
      title: "Foco Principal", 
      value: "Expansão em Benfica", 
      detail: "Aproveitar os 90km de rede recém-cabeada (Juiz de Fora). Aplicar a verba emergencial aprovada de R$ 1.000 com o gatilho 'Chegamos na sua região'.", 
      iconType: "map" 
    },
    { 
      title: "Pivotagem Tática (Com Prazo)", 
      value: "Oferta 700 Mega até 31/07", 
      detail: "Rodar o plano de 700 Mega por R$ 99,99 em Mimoso e Vila Velha apenas até 31 de Julho (alinhado com comercial) para proteger o LTV/CAC. Após isso, pausaremos para análise.", 
      iconType: "target" 
    },
    { 
      title: "Alerta Crítico", 
      value: "Zero Conversões", 
      detail: "Se zerar conversas por 3+ dias em nova adjacência, nossa equipe pausará a campanha no mesmo dia e diagnosticará a oferta.", 
      iconType: "alert-circle" 
    }
  ],
  regions: [
    { name: "Benfica (Juiz de Fora)", volume: "90km de rede recém-cabeada", cpl: "Oportunidade de Mercado", status: "Orçamento Especial: R$ 1.000 (Emergencial)", type: "success" },
    { name: "Vila Velha", volume: "Baixa tração atual", cpl: "Foco em reverter CAC", status: "Pivotagem: Oferta 700 Mega", type: "warning" },
    { name: "Muqui & Mimoso", volume: "Baixa tração atual", cpl: "Foco em reverter CAC", status: "Pivotagem: Oferta 700 Mega", type: "warning" }
  ],
  strategies: [
    { title: "Plano de Ação: Prioridade Benfica", description: "Expansão máxima na nova infraestrutura de Benfica. Focaremos o orçamento adicional aprovado para gerar demanda imediata no novo cabeamento.", type: "action" },
    { title: "Plano de Ação: Oferta Limitada e Avaliação", description: "Vila Velha e Muqui/Mimoso rodarão estritamente a campanha de 700 Mega (R$ 99,99) até 31 de Julho. Em agosto, pausaremos para analisar a qualidade das instalações, resposta do público, e definir os próximos passos da expansão horizontal.", type: "action" },
    { title: "Plano de Ação: Topo de Funil (YouTube)", description: "Manteremos a campanha de YouTube com orçamento mínimo de manutenção (R$ 150) focada apenas em gerar alcance e reconhecimento de marca (branding) nas novas praças.", type: "action" }
  ]
};
