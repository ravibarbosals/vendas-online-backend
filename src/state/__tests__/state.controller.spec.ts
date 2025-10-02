import { Test, TestingModule } from '@nestjs/testing';
import { StateController } from '../state.controller';
import { StateService } from '../state.service';
import { createStateMock } from '../__mocks__/create-state.mock';
import { userEntityMock } from '../../user/__mocks__/user.mock';
import { stateMock } from '../__mocks__/state.mock';

describe('StateController', () => {
  let controller: StateController;
  let stateService: StateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: StateService,
          useValue: {
            createState: jest.fn().mockResolvedValue(stateMock),
            findStateByUserId: jest.fn().mockResolvedValue([stateMock]),
          },
        },
      ],
      controllers: [StateController],
    }).compile();

    controller = module.get<StateController>(StateController);
    stateService = module.get<StateService>(StateService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(stateService).toBeDefined();
  });
  
  it('should state Entity in createState', async () => {
    const state = await controller.createState(
      createStateMock, 
      userEntityMock.id,
    );

    expect(state).toEqual(stateMock);
  });
  
  it('should state Entity in findStateByUserId', async () => {
    const statees = await controller.findStateByUserId(userEntityMock.id);

    expect(statees).toEqual([
      {
        complement: stateMock.complement,
        numberState: stateMock.numberState,
        cep: stateMock.cep,
      },
    ]);
  });
});
