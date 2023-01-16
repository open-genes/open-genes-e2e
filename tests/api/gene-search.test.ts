import { expect } from '@jest/globals';
import * as https from 'https';

describe('open-genes.com/api/gene/suggestions', () => {
  it('should return 400 if no query parameter is provided', () => {
    https.get('https://open-genes.com/api/gene/suggestions', {method: 'GET'}, (res => {
      expect(res.statusCode).toBe(400);
      expect(res).toHaveProperty('detail', 'At least one parameter should be provided: byGeneId, byGeneSymbol, input');
    }));
  });
});

