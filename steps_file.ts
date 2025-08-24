// steps_file.ts
import { container } from 'codeceptjs';

export = function () {
  return actor({
    async acceptNextDialog() {
      const pw: any = container.helpers('Playwright');   // ← get helper from container
      const { page } = pw;
      page.once('dialog', async d => { await d.accept(); });
    },

    async dismissNextDialog() {
      const pw: any = container.helpers('Playwright');
      const { page } = pw;
      page.once('dialog', async d => { await d.dismiss(); });
    },

    async answerNextPrompt(value: string) {
      const pw: any = container.helpers('Playwright');
      const { page } = pw;
      page.once('dialog', async d => { await d.accept(value); });
    },
  });
};
