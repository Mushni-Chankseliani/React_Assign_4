import { TEST_IDS } from '../../utils/testids';

export const Loader = ({ message }) => (
  <div className="row">
    <h2 className="text-center" data-testid={TEST_IDS.loader.message}>
      {message}
    </h2>
  </div>
);
