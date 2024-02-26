import { render, screen } from '@testing-library/react';

import { Button } from '@/shared/ui/Button/Button';

describe('Button', () => {
  test('Render with empty props', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByTestId('button')).toHaveClass('main');
  });

  test('Test small size', () => {
    render(<Button size="small">TEST</Button>);
    expect(screen.getByTestId('button')).toHaveClass('small');
    screen.debug();
  });
});
