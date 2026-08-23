import type { LegalDoc } from "@/lib/legal";

export const termsOfUse: LegalDoc = {
  title: "Terms of Use",
  sections: [
    {
      id: "acceptance",
      title: "Acceptance of these Terms",
      blocks: [
        {
          type: "p",
          text: "Your access and use of Shortku's website www.shortkutech.com (\"Website\") is subject to the following terms of use (\"Terms\"), Shortku's Privacy Notice, and Disclaimer, and the laws of the Kingdom of Saudi Arabia. Your consent and approval to these Terms is deemed effective upon your first use of this Website. Shortku, at its sole discretion, may amend these Terms with immediate effect and your consent and approval to such amendments is deemed upon your continuous use of the Website.",
        },
      ],
    },
    {
      id: "use",
      title: "Use of the Website",
      blocks: [
        {
          type: "p",
          text: "The contents of this Website are available for general information only and Shortku does not represent nor warrant the accuracy, reliability, or completeness of the information provided.",
        },
        {
          type: "p",
          text: "By using this Website, you agree and undertake not to:",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "use the Website in any way to send spam, phishing, or unsolicited emails;",
            "use the Website in claims to offer investment, banking, or financial services, or any other services, or in requesting monetary deposits or financial and/or personal information, or any fraudulent activity;",
            "use the Website, by post or publish or otherwise, in a defamatory, obscene, infringing, or disparaging way;",
            "upload files containing viruses or corrupt data, attack this Website in any way including using malicious or harmful technology, or using software to interfere with the proper operation of the Website;",
            "misuse the Website to engage in activities that are illegal or unlawful in the Kingdom of Saudi Arabia;",
            "attempt to get unauthorized access to the Website, servers or any connected databases, portals, or devices; or",
            "create a link to this Website in any way suggesting or claiming Shortku's association, endorsement, or approval.",
          ],
        },
        {
          type: "p",
          text: "Any breach of these Terms, misuse or abuse of any content or material on the Website, or unauthorized access to the Website is strictly prohibited and may result in claims for damages and/or criminal offenses as per the applicable laws and regulations in the Kingdom of Saudi Arabia.",
        },
      ],
    },
    {
      id: "secure-usage",
      title: "Secure Usage Policy",
      blocks: [
        {
          type: "p",
          text: "In consideration of using Shortku's web applications, I confirm that I have read, understood and agree to comply with the below statements; and I shall abide by them while using or accessing Shortku's web applications.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "I am aware that all data stored on or originating from, and all communications transmitted or received using, Shortku web applications are considered the property of Shortku.",
            "I will not copy, distribute, lose, misuse, disclose or modify any information related to Shortku without prior approval.",
            "I will comply with, and I will respect, Shortku's cybersecurity policies and procedures, and the law of the Kingdom of Saudi Arabia and any other related regulations.",
            "I will not attempt any unauthorized access to, interference with or disruption of any software, data, documents or systems available through Shortku's web application.",
            "I will not copy or download any material or any portion protected by copyright without proper authorization from the copyright owner.",
          ],
        },
      ],
    },
    {
      id: "property",
      title: "Property Rights",
      blocks: [
        {
          type: "p",
          text: "All intellectual property including, but not limited to, copyright in, and to, the content, trademarks, logos, trade names, design, layout, overall appearance, graphics, and other proprietary information provided on, or via, this Website (whether in text, images or other materials) are owned by, or have been licensed to, or have permission to use by Shortku and cannot be used without Shortku's prior written approval.",
        },
      ],
    },
    {
      id: "law",
      title: "Applicable Law",
      blocks: [
        {
          type: "p",
          text: "These Terms, including the Privacy Notice and the Disclaimer, and your use of this Website is governed by the laws of the Kingdom of Saudi Arabia and any non-contractual or contractual dispute or claim is subject to the exclusive jurisdiction of the courts in the Kingdom of Saudi Arabia.",
        },
      ],
    },
  ],
};
